import {Component} from '@angular/core';

@Component({
  selector: 'App',
  moduleId: __moduleName,
  templateUrl: 'hello.html'
})
export class Hello {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
