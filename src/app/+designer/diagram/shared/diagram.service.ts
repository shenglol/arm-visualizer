import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Resource } from 'arm-visualizer-engine';
import { ResourceService, TemplateService } from '../../../shared/index';
import { DiagramNodeData, DiagramNode } from './diagram-node.model';
import { DiagramEdgeData, DiagramEdge } from './diagram-edge.model';

@Injectable()
export class DiagramService {
  constructor(
    private http: Http,
    private resourceService: ResourceService,
    private templateService: TemplateService) { }

  createNodes(resources: Resource[]): Observable<DiagramNode[]> {
    return Observable.forkJoin(resources.map((resource, index) => {
      let iconUrl = this.resourceService.getIconUrl(resource);

      return this.http.get(iconUrl).map(res => {
        let resolvedName = this.templateService.resolveExpression(resource.name);
        let displayTypeName = this.resourceService.getDisplayTypeName(resource);
        let backgroundURI = this.createBackgroundURI(res.text(), displayTypeName);

        return this.createNode({
          id: index,
          label: this.truncate(resolvedName, 18),
          backgroundURI: backgroundURI,
          resource: resource
        });
      });
    }));
  }

  createEdges(nodes: DiagramNode[]): DiagramEdge[] {
    let edges: DiagramEdge[] = [];

    for (let node of nodes) {
      let resource = node.data.resource;
      let dependencies = this.templateService.getDependencies(resource);
      edges = edges.concat(dependencies.map((dependency, index) => {
        let sourceId = node.data.id;
        let targetId = _.findIndex(
          nodes.map(node => node.data.resource), x => _.isEqual(x, dependency));

        return this.createEdge({
          id: sourceId + '-' + targetId,
          source: sourceId,
          target: targetId,
          sourceResource: resource,
          targetResource: dependency
        });
      }));
    }

    return edges;
  }

  private createNode(nodeData: DiagramNodeData): DiagramNode {
    return {
      group: 'nodes',
      data: nodeData
    };
  }

  private createEdge(edgeData: DiagramEdgeData): DiagramEdge {
    return {
      group: 'edges',
      data: edgeData
    };
  }

  private createBackgroundURI(iconSvgText: string, displayTypeName: string): string {
    let backgroundURI = 'data:image/svg+xml;base64,' + btoa([
      '<svg xmlns="http://www.w3.org/2000/svg" width="280px" height="90px" viewBox="0 0 280 90">',
      '<rect width="100%" height="100%" rx="2" ry="2" fill="#f3f3f3"></rect>',
      '<g transform="translate(20,20)">',
      this.convertToSingleLine(iconSvgText),
      '</g>',
      '<text x="85" y="65" font-family="Segoe UI" font-size="16" fill="#9c9c9c">',
      this.truncate(displayTypeName, 25),
      '</text>',
      '</svg>'
    ].join(''));

    return encodeURI(backgroundURI);
  }

  private convertToSingleLine(iconSvgText: string): string {
    iconSvgText = iconSvgText
      .replace(/>(\r\n|\n|\r)/gm, '>')
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .replace(/[ \t]+/g, ' ');

    return iconSvgText;
  }

  private truncate(str: string, limit: number) {
    return str.length > limit ? str.substring(0, limit - 3) + '...' : str;
  }
}
