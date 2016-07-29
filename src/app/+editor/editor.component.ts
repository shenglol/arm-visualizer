import { Component, ViewChild, ElementRef, ViewQuery } from '@angular/core';
import { COMMON_DIRECTIVES  } from '@angular/common';
import { Router } from '@angular/router';

import { TemplateManager } from '../template-manager';

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

  private content: string = '';
  private subscription: any;
  private editor: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/editor(sidebar:explorer)');
    this.subscription = TemplateManager.emitter.subscribe((data) => {
      this.refreshContent();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  ngAfterViewInit() {
    var onGotAmdLoader = () => {
      (<any>window).require(['vs/editor/editor.main'], () => {
        this.initMonaco();
        this.refreshContent();
      });
    };

    if (!(<any>window).require) {
      var loaderScript = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'vs/loader.js';
      loaderScript.addEventListener('load', onGotAmdLoader);
      document.body.appendChild(loaderScript);
    } else {
      onGotAmdLoader();
    }
  }

  initMonaco() {
    let myDiv: HTMLDivElement = this.editorContent.nativeElement;
    this.editor = monaco.editor.create(myDiv, {
      value: '',
      language: 'json'
    });
    console.log(1);
  }

   private refreshContent() {
    this.editor.setValue(TemplateManager.template.toString());
  }

}
