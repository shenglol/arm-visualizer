import { TreeViewNodeData } from '../shared/index';

export class ToolboxItem implements TreeViewNodeData {
  name: string;
  iconUrl: string;
  resource: string;
  categoryName?: string;

  constructor(iconUrl: string, name: string, resource: string,
    private hasDefaultJson?: boolean, categoryName?: string) {
    this.name = name;
    this.iconUrl = iconUrl;
    this.resource = resource;
    this.categoryName = categoryName;
  }
}
