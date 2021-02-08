import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomeValidators {
  static checkSpaceInput(control: AbstractControl): ValidationErrors | null {
    if (control.value.trim() === '') {
      return { inputIsSpace: true };
    }

    return null;
  }
}
