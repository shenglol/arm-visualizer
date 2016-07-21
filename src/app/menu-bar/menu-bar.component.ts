import { Component } from '@angular/core';
import { NGB_DROPDOWN_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'menu-bar',
  moduleId: __moduleName,
  templateUrl: 'menu-bar.component.html',
  styleUrls: ['menu-bar.component.css'],
  directives: [NGB_DROPDOWN_DIRECTIVES]
})
export class MenuBarComponent {
  openLocalTemplate() {
    console.log('open local template');
  }

  openQuickstartTemplate() {
    console.log('open quickstart template');
  }

  exportTemplate() {
    console.log('export template');
  }

  deployToAzure() {
    console.log('deploy to azure');
  }
}
