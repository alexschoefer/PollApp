import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {

  /**
   * Sets the theme of the landing page to 'landing-page' when the component is initialized.
   */
  ngOnInit() {
    document.body.setAttribute('data-theme', 'landing-page');
  }




}
