import { provideRouter, RouterConfig }  from '@angular/router';

import { DesignerRoutes } from './+designer/index';
import { EditorRoutes } from './+editor/index';

const routes: RouterConfig = [
  ...EditorRoutes,
  ...DesignerRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
