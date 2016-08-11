import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

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

  private subscription: any;
  private editor: any;

  constructor(
    private store: Store<EditorState>,
    private templateService: TemplateService) { }

  ngOnInit() {
    (<any>window).require(['vs/editor/editor.main'], () => {
      this.initMonaco();
      this.subscription = this.templateService.templateChanged.subscribe(() => {
        this.refreshContent();
      });
    });
  }

  ngOnDestroy() {
    this.store.dispatch( { type: UPDATE, payload: this.editor.getPosition() });
    this.subscription.unsubscribe();
    this.templateService.loadTemplate(this.editor.getValue());
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
        this.editor.setPosition(position);
        this.editor.revealPositionInCenter(position);
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
