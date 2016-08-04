import { Component, OnInit } from '@angular/core';

import { ToolboxComponent } from './toolbox/index';
import { DiagramComponent } from './diagram/index';

@Component({
  moduleId: __moduleName,
  selector: 'designer',
  templateUrl: 'designer.component.html',
  styleUrls: ['designer.component.css'],
  directives: [ToolboxComponent, DiagramComponent]
})
export class DesignerComponent {}
