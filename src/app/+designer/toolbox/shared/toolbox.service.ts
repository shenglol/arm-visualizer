import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

import { ToolboxCategory } from './toolbox-category.model';
import { ToolboxItem } from './toolbox-item.model';

const DATA_DIR = 'assets/data/arm-resources/';
const CATEGORIES_FILE_NAME = 'categories.json';

@Injectable()
export class ToolboxService {
  constructor(private http: Http) {}

  getCategories(): Observable<ToolboxCategory[]> {
    let categoriesUrl = DATA_DIR + CATEGORIES_FILE_NAME;

    return this.http.get(categoriesUrl)
      .map(res => {
        return res.json()
          .map(category => {
            return _.assign({}, category, { getChildren: this.getItems });
          });
      });
  }

  getItems(category: ToolboxCategory): Observable<ToolboxItem[]> {
    return Observable.from([]);
  }
}
