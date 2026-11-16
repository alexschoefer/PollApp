import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dialog',
  styleUrl: './dialog.scss',
  templateUrl: './dialog.html',
})
export class Dialog {
  open = input(false);
  openChange = output<boolean>();

}
