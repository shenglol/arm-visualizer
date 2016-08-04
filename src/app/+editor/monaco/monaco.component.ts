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
  @ViewChild('editor') editorContent: ElementRef;

  private subscription: any;
  private editor: any;

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.subscription = this.templateService.templateChanged.subscribe(() => {
      this.refreshContent();
    });

    let onGotAmdLoader = () => {
      (<any>window).require(['vs/editor/editor.main'], () => {
        this.initMonaco();
        this.refreshContent();
      });
    };

    if (!(<any>window).require) {
      let loaderScript = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'vs/loader.js';
      loaderScript.addEventListener('load', onGotAmdLoader);
      document.body.appendChild(loaderScript);
    } else {
      onGotAmdLoader();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initMonaco() {
    let editorDiv: HTMLDivElement = this.editorContent.nativeElement;
    this.editor = monaco.editor.create(editorDiv, {
      value: '',
      language: 'json'
    });
  }

  private refreshContent() {
    this.editor.setValue(this.templateService.template.toString());
  }
}
