import { provideRouter, RouterConfig }  from '@angular/router';

import { DesignerRoutes } from './+designer/index';
import { EditorComponent } from './+editor/index';
import { ExplorerComponent } from './+explorer/index';

const routes: RouterConfig = [
  ...DesignerRoutes,
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'explorer',
    component: ExplorerComponent,
    outlet: 'sidebar'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
