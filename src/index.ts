import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {production} from '@system-env';

// import { APP_ROUTER_PROVIDERS } from './app/app.routes.ts';

import { AppComponent } from './app/app.component.ts';

if (production) {
  enableProdMode();
}

bootstrap(AppComponent);
