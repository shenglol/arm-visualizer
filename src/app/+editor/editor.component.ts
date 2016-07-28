import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TemplateManager } from '../template-manager';

@Component({
  moduleId: __moduleName,
  selector: 'editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css'],
})
export class EditorComponent {
  private content: string = '';
  private subscription: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/editor(sidebar:explorer)');

    this.subscription = TemplateManager.emitter.subscribe((data) => {
      this.refreshContent();
    });

    this.refreshContent();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private refreshContent() {
    this.content = TemplateManager.template.toString();
  }
}
