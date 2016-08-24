import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router,
    private templateService: TemplateService,
    private diagramService: DiagramService) { }

  ngOnInit() {
    this.initCytoscape();

    this.subscription = this.templateService.templateChanged
      .subscribe(() => this.drawDiagram());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

    this.destroyCytoscape();
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
        },
        {
          selector: ':active',
          style: {
            'overlay-color': '#563d7c',
            'overlay-opacity': .1
          }
        }
      ],

      // interaction options
      minZoom: .2,
      maxZoom: 2,

      // rendering options
      wheelSensitivity: .1,

    });

    this.cy.on('tap', 'node', event => this.onNodeTap(event));
    this.cy.on('mouseover', 'node', event => this.onNodeMouseover(event));
    this.cy.on('mouseout', 'node', event => this.onNodeMouseout(event));

    this.drawDiagram();
  }

  private destroyCytoscape() {
    if (this.cy) {
      this.cy.destroy();
    }
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

  private onNodeTap(event: any) {
    let node = event.cyTarget;
    this.router.navigate(['/editor', node.id()]);
  }

  private onNodeMouseover(event: any) {
    document.getElementById('cy').style.cursor = 'pointer';
  }

  private onNodeMouseout(event: any) {
    document.getElementById('cy').style.cursor = 'default';
  }
}
