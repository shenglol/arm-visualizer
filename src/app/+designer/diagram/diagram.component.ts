import { Component, OnInit, OnDestroy } from '@angular/core';

import { DiagramService } from './diagram.service';
import { TemplateService } from '../../shared/index';

declare var cytoscape: any;

@Component({
  moduleId: __moduleName,
  selector: 'diagram',
  templateUrl: 'diagram.component.html',
  styleUrls: ['diagram.component.css'],
  providers: [DiagramService]
})
export class DiagramComponent implements OnInit, OnDestroy {
  private subscription: any;
  private cy: any;

  constructor(
    private templateService: TemplateService,
    private designerService: DiagramService) { }

  ngOnInit() {
    this.subscription = this.templateService.templateChanged.subscribe(() => {
      this.refreshContent();
    });

    this.refreshContent();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.cy) {
      this.cy.destroy();
    }
  }

  private refreshContent() {
    let nodes: any[] = [];
    let edges: any[] = [];

    for (let resource of this.templateService.getAllResources()) {
      let sourceId = resource.type + '/' + resource.name;
      let label = this.templateService.resolveExpression(resource.name);

      this.designerService.getNodeBackground(resource.type).subscribe(
        background => {
          nodes.push({
            group: 'nodes',
            data: {
              id: sourceId,
              label: label.length > 20 ? label.substring(0, 17) + '...' : label,
              background: background
            }
          });

          for (let dependency of this.templateService.getDependencies(resource)) {
            let targetId = dependency.type + '/' + dependency.name;

            edges.push({
              group: 'edges',
              data: {
                source: sourceId,
                target: targetId
              }
            });
          }

          if (nodes.length === this.templateService.getAllResources().length) {
            this.drawDiagram(nodes, edges);
            this.templateService.reportErrors();
          }
        },
        error => {
          // todo: real error handling
          console.log(error);
        }
      );
    }

  }

  private drawDiagram(nodes: any[], edges: any[]) {
    this.cy = cytoscape({
      container: document.getElementById('cy'),

      boxSelectionEnabled: false,
      autounselectify: false,
      wheelSensitivity: .2,

      style: [
        {
          selector: 'node',
          style: {
            'content': 'data(label)',
            'shape': 'rectangle',
            'background-image': 'data(background)',
            'background-opacity': '0',
            'text-valign': 'top',
            'text-halign': 'right',
            'text-margin-x': -195,
            'text-margin-y': 45,
            'font-family': 'Segoe UI Semibold',
            'font-size': 20,
            'font-weight': 'bold',
            'color': '#5c5c5c',
            'width': 280,
            'height': 90
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 4,
            'target-arrow-shape': 'triangle',
            'line-color': '#cccedb',
            'target-arrow-color': '#cccedb',
            'curve-style': 'bezier'
          }
        }
      ]
    });

    this.cy.add(nodes);
    this.cy.add(edges);

    this.cy.minZoom(.2);
    this.cy.maxZoom(4);

    this.cy.layout({
      name: 'breadthfirst',
      directed: true,
      padding: 50,
      spacingFactor: 1.1,
      avoidOverlap: true
    });
  }
}
