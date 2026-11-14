import { Component, input, viewChild, ElementRef, HostListener, output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SURVEY_CATEGORIES } from '../../constants/survey-categories';

@Component({
  imports: [],
  selector: 'app-drop-down',
  styleUrl: './drop-down.scss',
  templateUrl: './drop-down.html',
})
export class DropDown {

  categories = ['All surveys', ...SURVEY_CATEGORIES];
  label = input<string>('');
  selectedCategory = input<string | null>(null);

  value = input<string | null>(null);
  valueChange = output<string>();

  // Define a reference to the dropdown element
  dropDownRef = viewChild<ElementRef>('dropDownRef');

  control = input<FormControl<string | null> | null>(null);



  isDropDownOpen = false;


  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }


  onTriggerClick(event: MouseEvent) {
    event.stopPropagation();
    this.toggleDropdown();
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInside = this.dropDownRef()?.nativeElement.contains(target);
    if (!clickedInside) {
      this.isDropDownOpen = false;
    }
  }

onCategoryClick(option: string) {

    this.valueChange.emit(option);

    const control = this.control();

    if (control) {
        control.setValue(option);
        control.markAsTouched();
    }

    this.isDropDownOpen = false;
}


}
