import { Component } from '@angular/core';

import { TreeViewNode, TreeViewComponent } from '../shared/index';

@Component({
  moduleId: __moduleName,
  selector: 'toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.css'],
  directives: [TreeViewComponent]
})
export class ToolboxComponent {
  toolboxNodes: TreeViewNode[] = [];

  constructor() {
    let group1 = new TreeViewNode({
      name: 'Virtual machines'
    },
    [
      new TreeViewNode({
        name: 'toolbox1-item1'
      }),
      new TreeViewNode({
        name: 'toolbox1-nested1',
      },
      [
        new TreeViewNode({
          name: 'toolbox1-nested1-item1'
        })
      ])
    ]);

    let group2 = new TreeViewNode({
      name: 'Virtual networks'
    },
    [
      new TreeViewNode({
        name: 'toolbox2-item1'
      }),
      new TreeViewNode({
        name: 'toolbox2-item2'
      })
    ]);

    this.toolboxNodes = [group1, group2];
  }
}
