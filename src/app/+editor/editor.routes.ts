import { provideRouter, RouterConfig }  from '@angular/router';

import { EditorComponent } from './editor.component';

export const EditorRoutes: RouterConfig = [
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'editor/:resourceId',
    component: EditorComponent
  }
];
