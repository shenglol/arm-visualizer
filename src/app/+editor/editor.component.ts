import { Component, ViewChild, ElementRef, ViewQuery } from '@angular/core';
import { COMMON_DIRECTIVES  } from '@angular/common';
import { Router } from '@angular/router';

import { TemplateService } from '../shared/index';

declare const monaco: any;
declare const require: any;

@Component({
  moduleId: __moduleName,
  selector: 'editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css'],
  directives: [COMMON_DIRECTIVES]
})
export class EditorComponent {
  @ViewChild('editor') editorContent: ElementRef;

  private subscription: any;
  private editor: any;

  constructor(
    private router: Router,
    private templateService: TemplateService) { }

  ngOnInit() {
    this.router.navigateByUrl('/editor(sidebar:explorer)');
    this.subscription = this.templateService.templateChanged.subscribe(() => {
      this.refreshContent();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  ngAfterViewInit() {
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

  initMonaco() {
    let editorDiv: HTMLDivElement = this.editorContent.nativeElement;
    this.editor = monaco.editor.create(editorDiv, {
      value: '',
      language: 'json'
    });
    console.log(1);
  }

  private refreshContent() {
    this.editor.setValue(this.templateService.template.toString());
  }
}
