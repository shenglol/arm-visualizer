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
      let resourceType = resource.type;
      let resourceName = this.templateService.template.resolveName(resource);

      this.designerService.getNodeBackground(resourceType).subscribe(
        background => {
          nodes.push({
            group: 'nodes',
            data: {
              id: sourceId,
              bg: background
            }
          });

          let dependencies = this.templateService.template.resolveDependencies(resource);
          for (let dependency of dependencies) {
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

      style: [
        {
          selector: 'node',
          style: {
            'shape': 'rectangle',
            'background-image': 'data(bg)',
            'height': 90,
            'width': 280,
            'background-opacity': '0'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 2,
            'target-arrow-shape': 'triangle',
            'line-color': '#d3d3d3',
            'target-arrow-color': '#d3d3d3',
            'curve-style': 'bezier'
          }
        }
      ]
    });

    this.cy.add(nodes);
    this.cy.add(edges);

    this.cy.layout({
      name: 'breadthfirst',
      directed: true,
      padding: 80,
      spacingFactor: 1.05,
      avoidOverlap: true
    });
  }
}
