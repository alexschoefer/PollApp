import { Component, ViewChild } from '@angular/core';
import { SurveyList } from '../surveys/survey-list/survey-list';
import { DropDown } from '../../shared/components/drop-down/drop-down';
import { SURVEY_CATEGORIES } from '../../shared/constants/survey-categories';
import { Dialog } from '../../shared/components/dialog/dialog';
import { SurveyCreatePage } from '../surveys/pages/survey-create-page/survey-create-page';

@Component({
  imports: [SurveyList, DropDown, Dialog, SurveyCreatePage],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {
  
  /**
   * filter for the survey list, can be either 'active' or 'past' 
   * */
  activeFilter: 'active' | 'past' = 'active';

  /**
   * The list of survey categories available for filtering surveys.
   */
  selectedCategory: string | null = null;

  /**
   * Indicates whether the create survey dialog is open or closed.
   */
  isCreateSurveyOpen = false;

  /**
   * Sets the theme of the landing page to 'landing-page' when the component is initialized.
   */
  ngOnInit() {
    document.body.setAttribute('data-theme', 'landing-page');
  }




}
