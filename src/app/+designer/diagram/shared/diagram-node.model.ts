import { Resource } from 'arm-visualizer-engine';

export interface DiagramNodeData {
  id: number | string;
  label: string;
  labelWidth: number;
  labelMarginX: number;
  backgroundURI: string;
  resource: Resource;
}

export interface DiagramNode {
  group: string;
  data: DiagramNodeData;
}
