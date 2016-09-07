import { Observable } from 'Rxjs/Rx';

import { TreeViewNode } from './tree-view-node.model';

interface TemplateOption {
  template: string;
}

interface TemplateUrlOption {
  templateUrl: string;
}

interface TemplateComponentOption {
  templateComponent: any;
}

interface InteractionOptions {
  selection?: 'none' | 'single' | 'multiple';
}

interface MouseEventHandlers {
  click?: (node: TreeViewNode, ev: MouseEvent) => void;
  dblclick?: (node: TreeViewNode, ev: MouseEvent) => void;
}

interface KeyboardEventHandlers {
  // TODO: Add event handlers
}

export type TreeViewConfig = (TemplateOption | TemplateUrlOption | TemplateComponentOption)
  & InteractionOptions & MouseEventHandlers & KeyboardEventHandlers;
