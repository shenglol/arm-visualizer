import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TreeViewNodeData, AsyncTreeViewNodeData, TreeViewConfig, TreeViewComponent } from '../../shared/index';
import { ToolboxCategory, ToolboxService } from './shared/index';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.css'],
  directives: [TreeViewComponent],
  providers: [ToolboxService]
})
export class ToolboxComponent implements OnInit {
  private categories: ToolboxCategory[];
  private config: TreeViewConfig;
  private subscription: any;

  constructor(private toolboxService: ToolboxService) {}

  ngOnInit() {
    this.subscription = this.toolboxService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
        this.config = {
          template: '{{node.data.name}}'
        };
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
