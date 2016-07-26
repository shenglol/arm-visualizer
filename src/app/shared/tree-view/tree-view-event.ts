import { TreeViewNode } from './tree-view-node/tree-view-node';

export const TREE_VIEW_EVENT_NAMES = {
  nodeClick: 'nodeClick',
  nodeDbClick: 'nodeDbClick'
};

export interface TreeViewEvent {
  eventName: string;
  treeViewNode: TreeViewNode;
}
