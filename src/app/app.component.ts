import { Component } from '@angular/core';

import {
  MenuBarComponent,
  NavbarComponent,
  SidebarComponent,
  MainSectionComponent
} from './shared/index';

@Component({
  moduleId: __moduleName,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MenuBarComponent,
    NavbarComponent,
    SidebarComponent,
    MainSectionComponent
  ]
})
export class AppComponent {
}
