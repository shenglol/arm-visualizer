import { provideRouter, RouterConfig }  from '@angular/router';

import { DesignerRoutes } from './+designer/index';
import { EditorRoutes } from './+editor/index';

const routes: RouterConfig = [
  ...DesignerRoutes,
  ...EditorRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
