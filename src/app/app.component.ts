import { Component } from '@angular/core';

import {
  MenuBarComponent,
  SidebarComponent,
  WorkbenchComponent
} from './shared/index';

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
