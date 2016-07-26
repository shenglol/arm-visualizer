// import { TreeViewNodeData } from './tree-view-node-data';
import { TreeView } from '../tree-view';

export interface TreeViewNodeData {
  name: string;
  iconUrl?: string;
}

export class TreeViewNode {
  private _treeView: TreeView;
  private _level: number;
  private _isExpanded: boolean = false;

  constructor(
    private _data: TreeViewNodeData,
    private _children?: TreeViewNode[]) { }

  get treeView(): TreeView {
    return this._treeView;
  }

  set treeView(value: TreeView) {
    this._treeView = value;
    if (this.hasChildren) {
      for (let child of this.children) {
        child.treeView = value;
      }
    }
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
    if (this.hasChildren) {
      for (let child of this.children) {
        child.level = value + 1;
      }
    }
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  get isFocused(): boolean {
    return this.treeView.focusedNode === this;
  }

  get data(): TreeViewNodeData {
    return this._data;
  }

  get children(): TreeViewNode[] {
    return this._children;
  }

  get hasChildren(): boolean {
    return this._children ? this._children.length > 0 : false;
  }

  onClick() {
    this.toggle();
    this.focus();
    console.log('click');
  }

  onDoubleClick() {
    this.focus();
    console.log('double click');
  }

  private toggle() {
    if (this.hasChildren) {
      this._isExpanded = !this._isExpanded;
    }
  }

  private focus() {
    this.treeView.focusedNode = this;
  }
}
