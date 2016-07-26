import { EventEmitter } from '@angular/core';

import { TreeViewNode } from './tree-view-node/tree-view-node';
import { TREE_VIEW_EVENT_NAMES, TreeViewEvent } from './tree-view-event';

export class TreeView {
  private _nodes: TreeViewNode[];
  private _focusedNode: TreeViewNode;
  private _events: any = {};

  constructor() {
    for (let eventName of Object.keys(TREE_VIEW_EVENT_NAMES)) {
      this._events[eventName] = new EventEmitter();
    }
  }

  get nodes(): TreeViewNode[] {
    return this._nodes;
  }

  set nodes(value: TreeViewNode[]) {
    this._nodes = value;
    for (let node of this._nodes) {
      node.treeView = this;
      node.level = 0;
    }
  }

  get focusedNode(): TreeViewNode {
    return this._focusedNode;
  }

  set focusedNode(value: TreeViewNode) {
    this._focusedNode = value;
  }

  get events(): any {
    return this._events;
  }

  invokeEvent(event: TreeViewEvent) {
    this._events[event.eventName].emit(event);
  }
}
