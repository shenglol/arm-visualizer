import { provideRouter, RouterConfig }  from '@angular/router';

import { DesignerComponent } from './+designer/index';
import { EditorComponent } from './+editor/index';
import { ToolboxComponent } from './+toolbox/index';
import { ExplorerComponent } from './+explorer/index';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/designer',
    pathMatch: 'full'
  },
  {
    path: 'designer',
    component: DesignerComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'toolbox',
    component: ToolboxComponent,
    outlet: 'sidebar'
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
