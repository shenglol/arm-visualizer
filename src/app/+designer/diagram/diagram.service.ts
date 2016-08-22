import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { TYPE_DISPLAY_NAME_MAP, TYPE_ICON_NAME_MAP, DEFAULT_ICON_NAME } from '../../shared/index';

@Injectable()
export class DiagramService {
  constructor(private http: Http) { }

  getNodeBackground(resourceType: string): Observable<string> {
    let iconName = TYPE_ICON_NAME_MAP[resourceType] || DEFAULT_ICON_NAME;
    let iconUrl = 'assets/icons/svg/' + iconName.replace(/\s+/g, '') + '.svg';

    return this.http.get(iconUrl)
      .map((res: Response) => {
        resourceType = TYPE_DISPLAY_NAME_MAP[resourceType] || resourceType;
        resourceType = resourceType.length > 24 ? resourceType.substr(0, 21) + '...' : resourceType;
        return this.generateSVGBackground(res, resourceType);
      })
      .catch(this.handleError);
  }

  private generateSVGBackground(res: Response, resourceType: string): Observable<string> {
    let rect = '<rect width="100%" height="100%" rx="2" ry="2" fill="#f3f3f3"></rect>';
    let icon = '<g transform="translate(20,20)">' + this.converToSingleLine(res.text()) + '</g>';
    let type = [
      '<text x="85" y="65" font-family="Segoe UI" font-size="16" fill="#9c9c9c">',
      resourceType,
      '</text>'
    ].join('');

    let svgBackground = [
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="280" height="90">',
      rect,
      icon,
      type,
      '</svg>'
    ].join('');

    return encodeURI('data:image/svg+xml;base64,' + btoa(svgBackground));
  }

  private handleError(error: any) {
    console.log(error);
  }

  private converToSingleLine(iconContent: string): string {
    iconContent = iconContent
      .replace(/>(\r\n|\n|\r)/gm, '>')
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .replace(/\t+/g, ' ')
      .replace(/ +/g, ' ');

    return iconContent;
  }
}
