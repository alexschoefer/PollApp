import { Component } from '@angular/core';
import { SurveyList } from '../surveys/survey-list/survey-list';

@Component({
  imports: [SurveyList],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {

  /**
   * Sets the theme of the landing page to 'landing-page' when the component is initialized.
   */
  ngOnInit() {
    document.body.setAttribute('data-theme', 'landing-page');
  }




}
