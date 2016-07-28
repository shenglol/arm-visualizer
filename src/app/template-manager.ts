import { EventEmitter } from '@angular/core';
import { ARMTemplate } from 'arm-visualizer-engine';

export class TemplateManager {
  static template: ARMTemplate = new ARMTemplate();
  static emitter: EventEmitter = new EventEmitter();

  static loadTemplate(data: string) {
    console.log(1);
    this.template.load(data);
    this.emitter.emit('template');
  }
}
