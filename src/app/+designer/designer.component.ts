import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToolboxComponent } from './toolbox/index';
import { DiagramComponent } from './diagram/index';
import { TemplateService } from '../shared/index';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'designer',
  templateUrl: 'designer.component.html',
  styleUrls: ['designer.component.css'],
  directives: [ToolboxComponent, DiagramComponent]
})
export class DesignerComponent implements OnInit {
  constructor(
    private router: Router,
    private templateService: TemplateService) {}

  ngOnInit() {
    let loadIndex = this.router.url.indexOf('?load=');
    if (loadIndex > -1) {
      let url: string = this.router.url.substr(loadIndex + 6);
      console.log(url);
      this.templateService.loadTemplateFromUrl(url);
    }
  }
}
