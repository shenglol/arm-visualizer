import { TreeViewNodeData } from './tree-view-node-data';

export class TreeViewNode {
  private _isExpanded: boolean = false;

  constructor(
    private _data: TreeViewNodeData,
    private _children?: TreeViewNode[] ) { }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  set isExpanded(value: boolean) {
    this._isExpanded = value;
  }
  get name(): string {
    return this._data.name;
  }

  get iconUrl(): string {
    return this._data.iconUrl;
  }

  get children(): TreeViewNode[] {
    return this._children;
  }

  get hasChildren(): boolean {
    return this._children ? this._children.length > 0 : false;
  }

  toggle() {
    if (this.hasChildren) {
      this._isExpanded = !this._isExpanded;
    }
  }
}
