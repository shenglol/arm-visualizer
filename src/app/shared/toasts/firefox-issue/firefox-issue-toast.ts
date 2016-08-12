import { Toast, BodyOutputType } from 'angular2-toaster/angular2-toaster';

import { FirefoxIssueToastComponent } from './firefox-issue-toast.component';

export const FIREFOX_ISSUE_TOAST: Toast = {
  type: 'info',
  body: FirefoxIssueToastComponent,
  bodyOutputType: BodyOutputType.Component
};
