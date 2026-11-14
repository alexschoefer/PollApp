import { Component, ViewChild } from '@angular/core';
import { SurveyList } from '../surveys/survey-list/survey-list';
import { DropDown } from '../../shared/components/drop-down/drop-down';
import { SURVEY_CATEGORIES } from '../../shared/constants/survey-categories';

@Component({
  imports: [SurveyList, DropDown],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {
  
  /**
   * filter for the survey list, can be either 'active' or 'past' 
   * */
  activeFilter: 'active' | 'past' = 'active';


  selectedCategory: string | null = null;

  /**
   * Sets the theme of the landing page to 'landing-page' when the component is initialized.
   */
  ngOnInit() {
    document.body.setAttribute('data-theme', 'landing-page');
  }




}
