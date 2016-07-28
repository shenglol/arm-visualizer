import { TreeViewNodeData } from '../shared/index';

export class ToolboxItem implements TreeViewNodeData {
  name: string;
  iconUrl: string;
  resource: string;

  constructor(iconUrl: string, name: string, resource: string, foo?: boolean) {
    this.name = name;
    this.iconUrl = iconUrl;
    this.resource = resource;
  }
}
