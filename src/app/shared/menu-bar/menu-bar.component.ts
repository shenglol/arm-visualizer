import { Component } from '@angular/core';
import { NGB_DROPDOWN_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

import { TemplateManager } from '../../template-manager';

@Component({
  selector: 'menu-bar',
  moduleId: __moduleName,
  templateUrl: 'menu-bar.component.html',
  styleUrls: ['menu-bar.component.css'],
  directives: [NGB_DROPDOWN_DIRECTIVES]
})
export class MenuBarComponent {
  openLocalTemplate() {
    document.getElementById('menu-open-local').click();
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

  private onTemplateOpen(event: any) {
    let reader = new FileReader();

    reader.onload = (e) => {
      TemplateManager.loadTemplate(reader.result);
    };

    reader.readAsText(event.srcElement.files[0]);
  }
}
