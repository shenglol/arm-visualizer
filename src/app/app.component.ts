import { Component, Input } from '@angular/core';
import { ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

import { FIREFOX_ISSUE_TOAST } from './shared/index';
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
export class AppComponent {
  private toasterconfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-full-width',
    newestOnTop: true,
    timeout: 0
  });

  constructor(private toasterService: ToasterService) { }

  ngAfterViewInit() {
    // if (this.isFirefox()) {
      this.toasterService.pop(FIREFOX_ISSUE_TOAST);
    // }
  }

  private isFirefox(): boolean {
    return navigator.userAgent.indexOf('Firefox') !== -1;
  }
}
