import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { TemplateService } from '../shared/index';

declare var cytoscape: any;

@Component({
  moduleId: __moduleName,
  selector: 'designer',
  templateUrl: 'designer.component.html',
  styleUrls: ['designer.component.css'],
})
export class DesignerComponent implements OnInit, OnDestroy {
  private subscription: any;

  constructor(
    private router: Router,
    private templateService: TemplateService) { }

  ngOnInit() {
    this.router.navigateByUrl('/designer(sidebar:toolbox)');

    this.subscription = this.templateService.templateChanged.subscribe(() => {
      this.refreshContent();
    });

    this.refreshContent();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private refreshContent() {
    if (!this.templateService.template.resources) {
      return;
    }

    let nodes: any[] = [];
    let edges: any[] = [];

    for (let resource of this.templateService.template.resources) {
      let sourceId = resource.type + '/' + resource.name;
      nodes.push({
        group: 'nodes',
        data: {
          id: sourceId,
          bg: [
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="80"><g><g>',
            '<text x="10" y="40">' + this.templateService.template.resolveName(resource) + '</text>',
            '</g></g></svg>'
          ].join('')
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
    }

    let cy = cytoscape({
      container: document.getElementById('cy'),

      boxSelectionEnabled: false,
      autounselectify: false,

      style: [
        {
          selector: 'node',
          style: {
            'shape': 'rectangle',
            'background-image': 'data(bg)',
            'height': 80,
            'width': 200,
            'text-opacity': 0.5,
            'text-valign': 'center',
            'text-halign': 'right',
            'background-color': '#11479e'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 4,
            'target-arrow-shape': 'triangle',
            'line-color': '#9dbaea',
            'target-arrow-color': '#9dbaea',
            'curve-style': 'bezier'
          }
        }
      ]
    }); // cy init

    cy.add(nodes);
    cy.add(edges);

    cy.layout({
      name: 'breadthfirst',
      directed: true,
      padding: 100,
      avoidOverlap: true
    });
  }
}
