import { Component, OnInit, OnDestroy } from '@angular/core';

import { DiagramNode, DiagramService } from './shared/index';
import { TemplateService } from '../../shared/index';

declare const __moduleName: string;
declare const cytoscape: any;

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
    private diagramService: DiagramService) { }

  ngOnInit() {
    this.subscription = this.templateService.templateChanged
      .subscribe(() => this.refreshContent());

    this.refreshContent();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.cy) {
      this.cy.destroy();
    }
  }

  private refreshContent() {
    if (!this.cy) {
      this.initCytoscape();
    }

    this.drawDiagram();
  }

  private initCytoscape() {
    this.cy = cytoscape({
      // very commonly used options
      container: document.getElementById('cy'),
      style: [
        {
          selector: 'node',
          style: {
            'content': 'data(label)',
            'shape': 'rectangle',
            'background-image': 'data(backgroundURI)',
            'background-opacity': '0',
            'text-valign': 'top',
            'text-halign': 'right',
            'text-margin-x': -195,
            'text-margin-y': 45,
            'font-family': "'Segoe UI Semibold'",
            'font-size': '20',
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
      ],

      // interaction options
      minZoom: .2,
      maxZoom: 2,

      // rendering options
      wheelSensitivity: .1,

    });
  }


  private drawDiagram() {
    this.diagramService.createNodes(this.templateService.getAllResources())
      .subscribe(
        nodes => {
          let edges = this.diagramService.createEdges(nodes);

          this.cy.elements().remove();

          this.cy.add(nodes);
          this.cy.add(edges);

          this.cy.layout({
            name: 'breadthfirst',
            directed: true,
            padding: 70,
            spacingFactor: 1.1,
            avoidOverlap: true
          });
        },
        // TODO: real error handling
        error => console.log(error));
  }
}
