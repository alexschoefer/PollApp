import { Component } from '@angular/core';
import { DeleteButton } from '../../../shared/components/delete-button/delete-button';

@Component({
  imports: [DeleteButton],
  selector: 'app-create-question',
  styleUrl: './create-question.scss',
  templateUrl: './create-question.html',
})
export class CreateQuestion {}
