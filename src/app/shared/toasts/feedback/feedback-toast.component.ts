import { Component } from '@angular/core';


declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'feedback-toast',
  templateUrl: 'feedback-toast.html'
})
export class FeedbackToastComponent {
  onNeverButtonClick() {
    localStorage.setItem('feedback', 'never');
  }

  onTakeSurveyButtonClick() {
    localStorage.setItem('feedback', 'took');
    window.open('http://www.instant.ly/s/DDMwi');
  }
}
