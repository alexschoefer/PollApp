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

  /**
   * The list of categories to be displayed in the dropdown. It includes a default option 'All surveys' followed by the categories defined in SURVEY_CATEGORIES.
   */
  categories = ['All surveys', ...SURVEY_CATEGORIES];

  /**
   * The label for the dropdown, which is displayed as the trigger text. It can be set via input binding.
   */
  label = input<string>('');

  /**
   * The currently selected category from the dropdown. It can be null if no category is selected.
   */
  selectedCategory = input<string | null>(null);

  /**
   * The value emitted when a category is selected from the dropdown. It can be null if no category is selected.
   */
  value = input<string | null>(null);
  valueChange = output<string>();

  /**
   * A reference to the dropdown element in the template. 
   * It is used to determine if a click event occurred inside or outside the dropdown.
   */
  dropDownRef = viewChild<ElementRef>('dropDownRef');

  /**
   * The FormControl associated with the dropdown. It can be null if not provided.
   */
  control = input<FormControl<string | null> | null>(null);

  /**
   * Indicates whether the dropdown is currently open or closed.
   */
  isDropDownOpen = false;


  /**
   * Toggles the open state of the dropdown.
   */
  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }


  /**
   * Used to handle the click event on the dropdown trigger. 
   * It stops the event from propagating and toggles the dropdown's open state.
   * @param event 
   */
  onTriggerClick(event: MouseEvent) {
    event.stopPropagation();
    this.toggleDropdown();
  }


  /**
   * Handles clicks outside the dropdown to close it when the user clicks anywhere else on the document.
   * @param event 
   */
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInside = this.dropDownRef()?.nativeElement.contains(target);
    if (!clickedInside) {
      this.isDropDownOpen = false;
    }
  }


  /**
   * Handles the selection of a category from the dropdown. 
   * It emits the selected value, updates the associated FormControl if present, and closes the dropdown.
   * @param option 
   */
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
