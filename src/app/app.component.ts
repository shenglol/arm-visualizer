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
    timeout: 0
  });

  constructor(private toasterService: ToasterService) { }

  ngAfterViewInit() {
    this.toasterService.pop(FIREFOX_ISSUE_TOAST);
  }
}
