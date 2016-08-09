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

  reportErrors() {
    let templateErrors = this.engine.errorManager.templateErrors;
    let expressionErrors = this.engine.errorManager.expressionErrors;

    if (templateErrors.length > 0) {
      console.log('Template Errors:');
    }

    for (let templateError of templateErrors) {
      console.log('\t' + templateError);
    }

    if (Object.keys(expressionErrors).length > 0) {
      console.log('Expression Errors');
    }

    for (let expression of Object.keys(expressionErrors)) {
      console.log('\t' + expression);
      for (let expressionError of expressionErrors[expression]) {
        console.log('\t\t' + expressionError);
      }
    }
  }
}
