/// <reference path="../typings/index.d.ts"/>

import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes, Root} from './routes.ts';

import {production} from '@system-env';

if (production) {
  enableProdMode();
}

bootstrap(Root, [
  provideRouter(routes)
]);
