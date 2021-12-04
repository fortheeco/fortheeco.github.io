import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorService {

  constructor() { }

  /**
   * @description validates all the form fields manually
   */
   validateAllFields(formGroup: FormGroup): void {

    Object.keys(formGroup.controls).forEach(field => {

        const control = formGroup.get(field);

        if (control instanceof FormControl) {

            control.markAsTouched({ onlySelf: true });

        } else if (control instanceof FormGroup) {

            this.validateAllFields(control);
        }
    });
  }

  getError(form: FormGroup, field: string): string {
    if (!form) { return ''; }

    if (!form.get(field)) { return ''; }

    if (
      (form.get(field)?.touched && form.get(field)?.invalid) ||
      (form.get(field)?.hasError('serverError'))
      ) {
        return form.get(field)?.errors?.message;
        // console.log(errorMessage);
      } else {
        return '';
      }
  }
}
