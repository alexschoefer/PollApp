import { Component } from '@angular/core';
import { CreateSurvey } from '../../components/create-survey/create-survey';
import { CreateQuestion } from '../../../questions/create-question/create-question';

@Component({
  imports: [CreateSurvey, CreateQuestion],
  selector: 'app-survey-create-page',
  styleUrl: './survey-create-page.scss',
  templateUrl: './survey-create-page.html',
})
export class SurveyCreatePage {}
