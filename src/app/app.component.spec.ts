import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import { AppComponent } from './app.component.ts';
import { inject, async, setBaseTestProviders, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS} from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe('app component', () => {
  it('should render hello world', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(AppComponent)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        const hello = fixture.nativeElement;
        expect(hello.querySelector('h1').textContent).toBe('Hello World!');
      });
  })));
});
