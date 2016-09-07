import {
  Component, Input, AfterViewInit,
  DynamicComponentLoader, ViewContainerRef, ViewChild
} from '@angular/core';

import { TreeViewNode, TreeView } from '../shared/index';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'tree-view-node',
  templateUrl: 'tree-view-node.component.html',
  styleUrls: ['tree-view-node.component.css'],
  directives: [TreeViewNodeComponent]
})
export class TreeViewNodeComponent implements AfterViewInit {
  @Input()
  node: TreeViewNode;

  @ViewChild('nodeContent', { read: ViewContainerRef })
  nodeContent: ViewContainerRef;

  constructor(
    private dcl: DynamicComponentLoader,
    private treeView: TreeView) {}

  ngAfterViewInit() {
    let component = this.resolveContentComponent();

    this.dcl.loadNextToLocation(component, this.nodeContent)
      .then(c => {
        c.instance.node = this.node;
      });
  }

  onClick(event: MouseEvent) {
    // TODO
  }

  onDblClick(event: MouseEvent) {
    // TODO
  }

  private resolveContentComponent(): any {
    let contentComponent: any;
    let config: any = this.treeView.config;

    if (config.templateComponent) {
      contentComponent =  config.templateComponent;
    } else if (config.templateUrl) {
      let templateUrl = config.templateUrl;

      @Component({
        selector: 'tree-view-node-content',
        templateUrl: templateUrl
      })
      class TreeViewNodeContentComponent {
        @Input() node: TreeViewNode;
      }

      contentComponent = TreeViewNodeContentComponent;
    } else {
      let template = config.template;

      @Component({
        selector: 'tree-view-node-content',
        template: template
      })
      class TreeViewNodeContentComponent {
        @Input() node: TreeViewNode;
      }

      contentComponent = TreeViewNodeContentComponent;
    }

    return contentComponent;
  }
}
