import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: __moduleName,
  selector: 'workbench',
  templateUrl: 'workbench.component.html',
  styleUrls: ['workbench.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class WorkbenchComponent {
}
