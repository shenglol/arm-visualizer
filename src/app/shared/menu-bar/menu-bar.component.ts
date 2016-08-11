import { Component, ViewChild, ElementRef } from '@angular/core';
import { NGB_DROPDOWN_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { TemplateService } from '../template/template.service';

declare const __moduleName: string;

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

  // openQuickstartTemplate() {
  //   console.log('open quickstart template');
  // }

  exportTemplate() {
    let templateData = this.templateService.templateData;
    let blob = new Blob([templateData], { type: 'text/json;charset=utf-8' });
    saveAs(blob, 'template.json');
  }

  // deployToAzure() {
  //   console.log('deploy to azure');
  // }

  private onTemplateOpen(event: any) {
    let reader = new FileReader();

    reader.onload = (e) => {
      this.templateService.loadTemplate(reader.result);
    };

    let srcElement = event.srcElement || event.originalTarget;
    reader.readAsText(srcElement.files[0]);
    srcElement.value = null;
  }
}
