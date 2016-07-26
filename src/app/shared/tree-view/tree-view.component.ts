import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TreeViewNode } from './tree-view-node/index';
import { TreeViewNodeComponent } from './tree-view-node/index';
import { TreeView } from './tree-view';
import { TREE_VIEW_EVENT_NAMES } from './tree-view-event';

@Component({
  moduleId: __moduleName,
  selector: 'tree-view',
  templateUrl: 'tree-view.component.html',
  directives: [TreeViewNodeComponent],
  providers: [TreeView]
})
export class TreeViewComponent {
  @Input() set nodes(nodes: TreeViewNode[]) {
    this.treeView.nodes = nodes;
  }

  @Output() nodeClick: EventEmitter;
  @Output() nodeDbClick: EventEmitter;

  constructor(private treeView: TreeView) {
    for (let name of Object.keys(TREE_VIEW_EVENT_NAMES)) {
      this[name] = treeView.events[name];
    }
  };
}
