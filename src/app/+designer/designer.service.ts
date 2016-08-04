import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DesignerService {
  constructor(private http: Http) { }

  getNodeBackground(resourceType: string): Observable<string> {
    return this.http.get('assets/icons/svg/SQLDatabase.svg')
      .map((res: Response) => {
        return this.generateSVGBackground(res, resourceType);
      })
      .catch(this.handleError);
  }

  private generateSVGBackground(res: Response, resourceType: string): Observable<string> {

    let rect = '<rect width="100%" height="100%" rx="2" ry="2" fill="#f3f3f3"></rect>';
    let icon = '<g transform="translate(20,20)">' + this.converToSingleLine(res.text()) + '</g>';
    let type = '<text x="80" y="65" font-family="Helvetica,Arial,sans-serif" font-size="0.8rem" fill="#646465">' + resourceType + '</text>';

    let svgBackground = [
      'data:image/svg+xml;utf8,',
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="280" height="90" viewBox="0 0 280 90">',
      rect,
      icon,
      type,
      '</svg>'
    ].join('');

    return svgBackground;
  }

  private handleError(error: any) {
    console.log(error);
  }

  private converToSingleLine(iconContent: string): string {
    iconContent = iconContent.replace(/>(\r\n|\n|\r)/gm, '>');
    iconContent = iconContent.replace(/(\r\n|\n|\r)/gm, ' ');
    iconContent = iconContent.replace(/\t+/g, ' ');
    iconContent = iconContent.replace(/ +/g, ' ');

    return iconContent;
  }
}
