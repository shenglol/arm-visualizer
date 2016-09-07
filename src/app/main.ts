import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { production } from '@system-env';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { ResourceService, TemplateService } from './shared/index';
import { CursorPositionReducer } from './+editor/index';

if (production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ResourceService,
  TemplateService,
  provideStore({ cursorPosition: CursorPositionReducer })
]);
