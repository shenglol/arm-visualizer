import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: __moduleName,
  selector: 'editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css'],
})
export class EditorComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/editor(sidebar:explorer)');
  }
}
