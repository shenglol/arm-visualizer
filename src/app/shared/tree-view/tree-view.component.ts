import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TreeViewNodeData, AsyncTreeViewNodeData, TreeViewNode, TreeView, TreeViewConfig } from './shared/index';
import { TreeViewNodeComponent } from './tree-view-node/index';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'tree-view',
  templateUrl: 'tree-view.component.html',
  directives: [TreeViewNodeComponent],
  providers: [TreeView]
})
export class TreeViewComponent {
  @Input()
  set data(value: (TreeViewNodeData | AsyncTreeViewNodeData)[]) {
    this.treeView.data = value || [];
  }

  @Input()
  set config(value: TreeViewConfig) {
    this.treeView.config = value;
  }

  constructor(private treeView: TreeView) {}
}
