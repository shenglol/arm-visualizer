/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {Hello} from './app/hello.ts';

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
export class Root {
}

export const routes: RouterConfig = [
  {
    path: '',
    component: Hello
  }
];
