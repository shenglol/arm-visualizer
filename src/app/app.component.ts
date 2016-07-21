import { Component } from '@angular/core';

@Component({
  selector: 'app',
  moduleId: __moduleName,
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
