import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component.ts';
import { DesignerComponent } from './designer/designer.component.ts';
import { EditorComponent } from './editor/editor.component.ts';

@Component({
  selector: 'app',
  moduleId: __moduleName,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MenuBarComponent,
    DesignerComponent,
    EditorComponent,
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent {
}
