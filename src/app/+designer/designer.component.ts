import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: __moduleName,
  selector: 'designer',
  templateUrl: 'designer.component.html',
  styleUrls: ['designer.component.css'],
})
export class DesignerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/designer(sidebar:toolbox)');
  }
}
