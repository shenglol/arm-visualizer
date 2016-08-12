import { Component, Input } from '@angular/core';
import { ToasterContainerComponent, Toast, ToasterService, ToasterConfig, BodyOutputType } from 'angular2-toaster/angular2-toaster';

import {
  MenuBarComponent,
  SidebarComponent,
  WorkbenchComponent
} from './shared/index';

declare const __moduleName: string;

@Component({
    selector: 'action-component',
    template: `
        <div>Stabzs wants to speak.  Open Mic?</div>
        <div>Mic is {{micStatus ? 'Open' : 'Closed'}}
        <div>
            <button (click)="open()">Open</button>
            <button (click)="close()">Close</button>
        </div>`
})

class TestComponent3 {
    public micStatus: boolean = false;
    open() { console.log(1); }
    close() { this.micStatus = false; }
}

@Component({
  moduleId: __moduleName,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MenuBarComponent,
    SidebarComponent,
    WorkbenchComponent,
    ToasterContainerComponent
  ],
  providers: [ToasterService]
})
export class AppComponent {
  private toasterconfig: ToasterConfig = new ToasterConfig({
    showCloseButton: true,
    closeHtml: '<button>Close</button>',
    timeout: 0
  });

  constructor(private toasterService: ToasterService) { }

  ngAfterViewInit() {
    let toast : Toast = {
    type: 'error',
    body: TestComponent3,
    bodyOutputType: BodyOutputType.Component
};
    this.toasterService.pop(toast);
  }
}
