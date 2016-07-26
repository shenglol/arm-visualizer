import { Component, Input } from '@angular/core';

import { TreeViewNode } from './tree-view-node';

@Component({
  moduleId: __moduleName,
  selector: 'tree-view-node',
  templateUrl: 'tree-view-node.component.html',
  styleUrls: ['tree-view-node.component.css'],
  directives: [TreeViewNodeComponent]
})
export class TreeViewNodeComponent {
  @Input()
  node: TreeViewNode;
}
