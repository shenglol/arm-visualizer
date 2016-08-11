import { provideRouter, RouterConfig }  from '@angular/router';

import { DesignerComponent } from './designer.component';

export const DesignerRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/designer',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/designer',
    pathMatch: 'full'
  },
  {
    path: 'designer',
    component: DesignerComponent
  },
];
