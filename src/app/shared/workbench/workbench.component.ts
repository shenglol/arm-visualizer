import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'workbench',
  templateUrl: 'workbench.component.html',
  styleUrls: ['workbench.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class WorkbenchComponent {
}
