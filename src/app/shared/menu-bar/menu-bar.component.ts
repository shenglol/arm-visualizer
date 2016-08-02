import { Component, ViewChild, ElementRef } from '@angular/core';
import { NGB_DROPDOWN_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

import { TemplateService } from '../template.service';

@Component({
  moduleId: __moduleName,
  selector: 'menu-bar',
  templateUrl: 'menu-bar.component.html',
  styleUrls: ['menu-bar.component.css'],
  directives: [NGB_DROPDOWN_DIRECTIVES]
})
export class MenuBarComponent {
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private templateService: TemplateService) { }

  openLocalTemplate() {
    let fileInputElement: HTMLInputElement = this.fileInput.nativeElement;
    fileInputElement.click();
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
      this.templateService.loadTemplate(reader.result);
    };

    reader.readAsText(event.srcElement.files[0]);
    event.srcElement.value = null;
  }
}
