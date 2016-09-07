import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TreeViewNodeData, AsyncTreeViewNodeData, TreeViewConfig, TreeViewComponent } from '../../shared/index';
// import { ToolboxItems } from './toolbox-items';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.css'],
  directives: [TreeViewComponent]
  // providers: [ToolboxItems]
})
export class ToolboxComponent {
  // toolboxNodes: Array<TreeViewNodeData | AsyncTreeViewNodeData>;
  toolboxItems: any = [
    {
      label: 'root1',
      children: [
        {
          label: 'child1'
        }
      ]
    },
    {
      label: 'root2',
      // getChildren: (parent: AsyncTreeViewNodeData) => { return Observable.fromArray([]); }
      getChildren: this.test
    },
    {
      label: 'root3'
    }
  ];

  config: TreeViewConfig = {
    template: '{{node.data.label}}'
  };

  // constructor() {}
  test(parent: AsyncTreeViewNodeData) {
    return Observable.from([
      {
        label: 'haha'
      },
      {
        label: 'haha'
      },
      {
        label: 'haha'
      },
      {
        label: 'haha'
      },
    ]);
  }

}
