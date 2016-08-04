import { Component } from '@angular/core';

import {
  MenuBarComponent,
  NavbarComponent,
  WorkbenchComponent
} from './shared/index';

@Component({
  moduleId: __moduleName,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MenuBarComponent,
    NavbarComponent,
    WorkbenchComponent
  ]
})
export class AppComponent {
}
