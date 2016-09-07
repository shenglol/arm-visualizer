import * as _ from 'lodash';

import { TreeViewNodeData, AsyncTreeViewNodeData, TreeViewNode } from './tree-view-node.model';
import { TreeViewConfig } from './tree-view-node-config.model';

const DEFAULT_CONFIG: any = {
  selection: 'none'
};

export class TreeView {
  private _config: TreeViewConfig = DEFAULT_CONFIG;
  private _roots: TreeViewNode[];
  private _selectedNodes: TreeViewNode[] = [];

  get data(): (TreeViewNodeData | AsyncTreeViewNodeData)[] {
    // TODO
    return undefined;
  }

  get config(): TreeViewConfig {
    return this._config;
  }

  get roots() {
    return this._roots;
  }

  get selectedNodes(): TreeViewNode[] {
    return this._selectedNodes;
  }

  set data(value: (TreeViewNodeData | AsyncTreeViewNodeData)[]) {
    this._roots = value.map(d => new TreeViewNode(d, null, this));
  }

  set config(value: TreeViewConfig) {
    this._config = _.defaults(value, DEFAULT_CONFIG) as TreeViewConfig;
  }

  selectNode(node: TreeViewNode) {
    if (this.config.selection === 'single') {
      if (this._selectedNodes.length === 0) {
        this._selectedNodes.push(node);
      } else {
        this._selectedNodes[0] = node;
      }
    }
    if (this.config.selection === 'multiple') {
      if (!_.includes(this.selectedNodes, node)) {
        this.selectedNodes.push(node);
      }
    }
  }

  unselectNode(node: TreeViewNode) {
    _.remove(this.selectedNodes, node);
  }
}
