import { Component, output } from '@angular/core';
import { CreateSurvey } from '../../components/create-survey/create-survey';
import { CreateQuestion } from '../../../questions/create-question/create-question';

@Component({
  imports: [CreateSurvey, CreateQuestion],
  selector: 'app-survey-create-page',
  styleUrl: './survey-create-page.scss',
  templateUrl: './survey-create-page.html',
})
export class SurveyCreatePage {

  close = output<void>();

  /**
   * Close the overlay for creating a survey
   */
  closeCreateSurveyOverlay() {
    this.close.emit();
  }
}
