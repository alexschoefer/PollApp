import { Component } from '@angular/core';
import { DeleteButton } from '../../../shared/components/delete-button/delete-button';

@Component({
  imports: [DeleteButton],
  selector: 'app-create-answers',
  styleUrl: './create-answers.scss',
  templateUrl: './create-answers.html',
})
export class CreateAnswers {}
