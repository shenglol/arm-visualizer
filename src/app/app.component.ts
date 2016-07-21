import { Component } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component.ts';

@Component({
  selector: 'app',
  moduleId: __moduleName,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MenuBarComponent]
})
export class AppComponent {
}
