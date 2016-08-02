import { EventEmitter } from '@angular/core';

import { ARMTemplate } from 'arm-visualizer-engine';

export class TemplateService {
  private _template: ARMTemplate;
  private _templateChanged: EventEmitter;

  get template(): ARMTemplate {
    return this._template;
  }

  get templateChanged(): EventEmitter {
    return this._templateChanged;
  }

  constructor() {
    this._template = new ARMTemplate();
    this._templateChanged = new EventEmitter();
  }

  loadTemplate(data: string) {
    this._template.load(data);
    this._templateChanged.emit();
  }
}
