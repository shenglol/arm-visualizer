import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import { UPDATE, CursorPosition, EditorState } from '../shared/index';
import { TemplateService } from '../../shared/index';

declare const __moduleName: string;
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

  private templateSub: any;
  private navigationSub: any;
  private editor: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<EditorState>,
    private templateService: TemplateService) { }

  ngOnInit() {
    let onAmdLoaderLoad = () => {
      (<any>window).require(['vs/editor/editor.main'], () => {
        this.initMonaco();
        this.templateSub = this.templateService.templateChanged.subscribe(() => {
          this.refreshContent();
        });
        this.navigationSub = this.route.params.subscribe(params => {
          let id = +params['resourceId'];
          if (id) {
            let resource = this.templateService.getAllResources()[id];
            let resourceText = JSON.stringify(resource, null, 2).split('\n').map(line => line.trim()).join('\n');
            let sourceText = this.editor.getValue().split('\n').map(line => line.trim()).join('\n');
            let pos = sourceText.indexOf(resourceText);
            let lineCount = sourceText.substr(0, pos).split('\n').length;
            console.log(lineCount);
            this.editor.revealLineInCenter(lineCount + 10);
            this.editor.setPosition({ lineNumber: lineCount + 1, column: 0 });
          }
        });
      });
    };

    if (!(<any>window).require) {
      let loaderScript = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'vs/loader.js';
      loaderScript.addEventListener('load', onAmdLoaderLoad);
      document.body.appendChild(loaderScript);
    } else {
      onAmdLoaderLoad();
    }
  }

  ngOnDestroy() {
    this.templateSub.unsubscribe();
    this.navigationSub.unsubscribe();
    this.templateService.loadTemplate(this.editor.getValue());
    this.store.dispatch({ type: UPDATE, payload: this.editor.getPosition() });
    this.editor.dispose();
  }

  private initMonaco() {
    let editorDiv: HTMLDivElement = this.editorElementRef.nativeElement;
    this.editor = monaco.editor.create(editorDiv, {
      value: this.templateService.templateData,
      language: 'json'
    });

    this.editor.focus();

    this.store.select('cursorPosition')
      .subscribe(position => {
        let revealPosition = _.clone(position);
        revealPosition.lineNumber += 10;
        this.editor.setPosition(position);
        this.editor.revealPositionInCenter(revealPosition);
      });

    window.onresize = () => {
      if (this.editor) {
        let windowWidth = window.innerWidth;
        let sidebarWidth = document.getElementById('sidebar-container').clientWidth;
        let editorWidth = (windowWidth - sidebarWidth).toString() + 'px';
        (<HTMLDivElement>this.editorElementRef.nativeElement).style.width = editorWidth;
        this.editor.layout();
      }
    };
  }

  private refreshContent() {
    this.editor.setValue(this.templateService.templateData);
  }
}
