import { Component } from '@angular/core';

import {
  MenuBarComponent,
  SidebarComponent,
  WorkbenchComponent
} from './shared/index';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MenuBarComponent,
    SidebarComponent,
    WorkbenchComponent
  ]
})
export class AppComponent {
}
