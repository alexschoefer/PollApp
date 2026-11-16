import { Component } from '@angular/core';
import { CreateSurvey } from '../../components/create-survey/create-survey';

@Component({
  imports: [CreateSurvey],
  selector: 'app-survey-create-page',
  styleUrl: './survey-create-page.scss',
  templateUrl: './survey-create-page.html',
})
export class SurveyCreatePage {}
