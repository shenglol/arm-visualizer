import { Resource } from 'arm-visualizer-engine';

export interface DiagramEdgeData {
  id: number | string;
  source: number | string;
  target: number | string;
  sourceResource: Resource;
  targetResource: Resource;
}

export interface DiagramEdge {
  group: string;
  data: DiagramEdgeData;
}
