import { Component } from '@angular/core';

import { TreeViewNode, TreeViewComponent } from '../shared/index';
import { ToolboxItems } from './toolbox-items';

@Component({
  moduleId: __moduleName,
  selector: 'toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.css'],
  directives: [TreeViewComponent],
  providers: [ToolboxItems]
})
export class ToolboxComponent {
  toolboxNodes: TreeViewNode[] = [];
    constructor(private items: ToolboxItems) {
      this.toolboxNodes = items.getGroups();
    }
}
