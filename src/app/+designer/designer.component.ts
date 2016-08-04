import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { DesignerService } from './designer.service';
import { TemplateService } from '../shared/index';

declare var cytoscape: any;

@Component({
  moduleId: __moduleName,
  selector: 'designer',
  templateUrl: 'designer.component.html',
  styleUrls: ['designer.component.css'],
  providers: [DesignerService]
})
export class DesignerComponent implements OnInit, OnDestroy {
  private subscription: any;
  private cy: any;

  constructor(
    private router: Router,
    private templateService: TemplateService,
    private designerService: DesignerService) { }

  ngOnInit() {
    this.router.navigateByUrl('/designer(sidebar:toolbox)');

    this.subscription = this.templateService.templateChanged.subscribe(() => {
      this.refreshContent();
    });

    this.refreshContent();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.cy.destroy();
  }

  private refreshContent() {
    if (!this.templateService.template.resources) {
      return;
    }

    let nodes: any[] = [];
    let edges: any[] = [];

    for (let resource of this.templateService.template.resources) {
      let sourceId = resource.type + '/' + resource.name;
      let label = this.templateService.template.resolveName(resource);

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

          for (let dependency of this.templateService.template.resolveDependencies(resource)) {
            let targetId = dependency.type + '/' + dependency.name;

            edges.push({
              group: 'edges',
              data: {
                source: sourceId,
                target: targetId
              }
            });
          }

          if (nodes.length === this.templateService.template.resources.length) {
            this.drawDiagram(nodes, edges);
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

    this.cy.minZoom(.1);
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
