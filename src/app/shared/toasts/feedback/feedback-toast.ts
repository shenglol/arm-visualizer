import { Toast, BodyOutputType } from 'angular2-toaster/angular2-toaster';

import { FeedbackToastComponent } from './feedback-toast.component';

export const FEEDBACK_TOAST: Toast = {
  type: 'info',
  body: FeedbackToastComponent,
  bodyOutputType: BodyOutputType.Component
};
