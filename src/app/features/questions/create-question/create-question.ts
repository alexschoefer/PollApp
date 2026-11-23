import { Component, input, output } from '@angular/core';
import { DeleteButton } from '../../../shared/components/delete-button/delete-button';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAnswers } from '../../answers/create-answers/create-answers';


@Component({
  imports: [DeleteButton, ReactiveFormsModule, CreateAnswers],
  selector: 'app-create-question',
  styleUrl: './create-question.scss',
  templateUrl: './create-question.html',
})
export class CreateQuestion {
  /**
   * Variable for showing the error message
   */
  isVisible: boolean = false;

  /**
   * 
   */
  questionNumberIndex = input<number>();
}
