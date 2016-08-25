import { Component, Input, OnInit } from '@angular/core';
import { ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

import { FEEDBACK_TOAST } from './shared/index';
import { MenuBarComponent, SidebarComponent, WorkbenchComponent } from './shared/index';

declare const __moduleName: string;

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
export class AppComponent implements OnInit {
  private toasterconfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-full-width',
    newestOnTop: true,
    timeout: 0
  });

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    console.log(localStorage.getItem('feedback'));
    if (!localStorage.getItem('feedback')) {
      setTimeout(() => {
        this.toasterService.pop(FEEDBACK_TOAST);
      }, 20000);
    }
  }
}
