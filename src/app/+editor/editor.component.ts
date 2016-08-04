import { Component, OnInit } from '@angular/core';

import { ExplorerComponent } from './explorer/index';
import { MonacoComponent } from './monaco/index';

@Component({
  moduleId: __moduleName,
  selector: 'editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css'],
  directives: [ExplorerComponent, MonacoComponent]
})
export class EditorComponent {}
