import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {production} from '@system-env';

import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { TemplateService } from './app/shared/index';

if (production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  TemplateService
]);
