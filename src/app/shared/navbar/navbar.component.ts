import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: __moduleName,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {
  private active: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.active = {
      designer: 'active',
      editor: 'inactive'
    };
  }

  onDesignerClick() {
    this.active.designer = 'active';
    this.active.editor = 'inactive';
    this.router.navigateByUrl('/designer(sidebar:toolbox)');
  }

  onEditorClick() {
    this.active.designer = 'inactive';
    this.active.editor = 'active';
    this.router.navigateByUrl('/editor(sidebar:explorer)');
  }
}
