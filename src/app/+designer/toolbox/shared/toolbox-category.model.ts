import { AsyncTreeViewNodeData } from '../../../shared/index';

export interface ToolboxCategory extends AsyncTreeViewNodeData {
  iconUrl?: string;
  name: string;
}
