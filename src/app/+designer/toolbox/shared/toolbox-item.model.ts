import { Resource } from 'arm-visualizer-engine';
import { TreeViewNodeData } from '../../../shared/index';

export interface ToolboxItem extends TreeViewNodeData {
  resource: Resource;
}
