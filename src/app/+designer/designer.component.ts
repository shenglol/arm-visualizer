import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { TemplateManager } from '../template-manager';

@Component({
  moduleId: __moduleName,
  selector: 'designer',
  templateUrl: 'designer.component.html',
  styleUrls: ['designer.component.css'],
})
export class DesignerComponent implements OnInit, OnDestroy {
  private subscription: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/designer(sidebar:toolbox)');
    this.subscription = TemplateManager.emitter.subscribe((data) => {
      console.log(TemplateManager.template);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
