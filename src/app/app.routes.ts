import { provideRouter, RouterConfig }  from '@angular/router';

import { DesignerComponent } from './designer/designer.component.ts';
import { EditorComponent } from './editor/editor.component.ts';

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
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
