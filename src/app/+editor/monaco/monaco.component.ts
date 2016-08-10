import { Component, onInit, onDestroy, ViewChild, ElementRef } from '@angular/core';

import { TemplateService } from '../../shared/index';

declare const monaco: any;
declare const require: any;

@Component({
  moduleId: __moduleName,
  selector: 'monaco',
  templateUrl: 'monaco.component.html',
  styleUrls: ['monaco.component.css']
})
export class MonacoComponent {
  @ViewChild('editor') editorElementRef: ElementRef;

  private subscription: any;
  private editor: any;

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    (<any>window).require(['vs/editor/editor.main'], () => {
      this.initMonaco();
      this.subscription = this.templateService.templateChanged.subscribe(() => {
        this.refreshContent();
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.templateService.loadTemplate(this.editor.getValue());
  }

  private initMonaco() {
    let editorDiv: HTMLDivElement = this.editorElementRef.nativeElement;
    this.editor = monaco.editor.create(editorDiv, {
      value: this.templateService.templateData,
      language: 'json'
    });
  }

  private refreshContent() {
    this.editor.setValue(this.templateService.templateData);
  }
}
