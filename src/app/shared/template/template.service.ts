import { EventEmitter } from '@angular/core';

import { Resource, Template, TemplateEngine } from 'arm-visualizer-engine';

export class TemplateService {
  private engine: TemplateEngine;
  private _templateChanged: EventEmitter;

  get template(): Template {
    return this.engine.template;
  }

  get templateData(): string {
    return this.engine.templateData;
  }

  get templateChanged(): EventEmitter {
    return this._templateChanged;
  }

  constructor() {
    this.engine = new TemplateEngine();
    this._templateChanged = new EventEmitter();
  }

  loadTemplate(data: string) {
    this.engine.loadTemplate(data);
    this._templateChanged.emit();

    // TODO: error report console
    console.error('Template Errors:');
    console.log(this.engine.errorManager.templateErrors);
  }

  resolveExpression(source: string) {
    return this.engine.resolveExpression(source);
  }

  getAllResources(): Resource[] {
    return this.engine.getAllResources();
  }

  getDependencies(resource: Resource): Resource[] {
    return this.engine.getDependencies(resource);
  }
}
