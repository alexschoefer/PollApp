import { Component } from '@angular/core';
import { DropDown } from '../../../../shared/components/drop-down/drop-down';
import { ReactiveFormsModule } from '@angular/forms';
import { SURVEY_CATEGORIES } from '../../../../shared/constants/survey-categories';
import { DeleteButton } from '../../../../shared/components/delete-button/delete-button';

@Component({
  imports: [DropDown, ReactiveFormsModule, DeleteButton],
  selector: 'app-create-survey',
  styleUrl: './create-survey.scss',
  templateUrl: './create-survey.html',
})
export class CreateSurvey {
  today = new Date();
  categories = SURVEY_CATEGORIES;
}
