import { Component, input } from '@angular/core';
import { DeleteButton } from '../../../shared/components/delete-button/delete-button';
import { FormArray } from '@angular/forms';

@Component({
  imports: [DeleteButton],
  selector: 'app-create-answers',
  styleUrl: './create-answers.scss',
  templateUrl: './create-answers.html',
})


export class CreateAnswers {
  
  isVisible: boolean = false;
  questionNumberIndex = input<number>();
  answers = input<FormArray>();

  /**
   * Converts an index (0,1,2...) into a letter (A,B,C...)
   * @param index 
   * @returns 
   */
  getAnswerOptionLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }


}
