import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

import { TreeView } from './tree-view.model';

interface TreeViewNodeStatus {
  isExpanded?: boolean;
  isSelected?: boolean;
}

export interface TreeViewNodeData extends TreeViewNodeStatus {
  children?: TreeViewNodeData[];
}

export interface AsyncTreeViewNodeData extends TreeViewNodeStatus {
  getChildren: (parent: AsyncTreeViewNodeData)
    => Observable<(TreeViewNodeData | AsyncTreeViewNodeData)[]>;
}

export class TreeViewNode {
  private _level: number;
  private _isExpanded: boolean;
  private _children: TreeViewNode[];

  get level(): number {
    return this._level;
  }

  get isAsync(): boolean {
    return (<AsyncTreeViewNodeData>this.data).getChildren !== undefined;
  }

  get isSelected(): boolean {
    return _.includes(this.treeView.selectedNodes, this);
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  get isRoot(): boolean {
    return this.level === 0;
  }

  get children(): TreeViewNode[] {
    return this._children;
  }

  get hasChildren(): boolean {
    if (this.isAsync) {
      return true;
    }

    if (this.children) {
      return this.children.length > 0;
    }

    if ((<TreeViewNodeData>this.data).children) {
      return (<TreeViewNodeData>this.data).children.length > 0;
    }

    return false;
  }

  constructor(
    public data: TreeViewNodeData | AsyncTreeViewNodeData,
    public parent: TreeViewNode,
    public treeView: TreeView
  ) {
    this._level = this.parent ? this.parent.level + 1 : 0;
    this._isExpanded = data.isExpanded || false;

    if (data.isSelected) {
      this.treeView.selectNode(this);
    }
  }

  expand() {
    if (!this._isExpanded) {
      this._isExpanded = true;

      if (this.hasChildren && !this.children) {
        if (this.isAsync) {
          this.loadChildrenAsync();
        } else {
          this.loadChildren();
        }
      }
    }
  }

  collapse() {
    if (this._isExpanded) {
      this._isExpanded = false;
    }
  }

  toggle() {
    if (!this._isExpanded) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  private loadChildren() {
    this._children = (<TreeViewNodeData>this.data).children
      .map(c => new TreeViewNode(c, this, this.treeView));
  }

  private loadChildrenAsync() {
    this._children = [];

    let data = <AsyncTreeViewNodeData>this.data;
    data.getChildren(data)
      .subscribe(d => this.children.push(new TreeViewNode(d, this, this.treeView)));
  }
}
