import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

/**
 * @description Thses are common validators that may be required in the application
 */
export class CommonValidator {

  /**
   * Confirms the value of this field and the field given in the parameter
   * @param field the field to compare with
   */
  static confirmation(field: string, display: string = null): ValidatorFn {
    return (c: AbstractControl) => {
      const parent = c.parent;
      if (!parent) {
          return null;
      }

      const originalField = parent.get(field).value ?  parent.get(field).value : null;
      if (originalField === c.value) {
          return null;
      }

      const fieldToDisplay = display || field;

      return { invalidConfirmation: true, message: `field must match ${fieldToDisplay}` };
    };
  }

/**
 * @description verify password follows pattern, I know there is a pattern validator, I was just trying to be smart
 * @param pattern The pattern a password should follow
 * @param errorMessage Error message is pattern did not correspond
 */
  static ValidPassword(
    pattern: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_#£~|])[A-Za-z\\d@$!%*?&_#£~|]{5,}$',
    errorMessage: string = `Min 5 chars with one lowercase, uppercase, special char and number`
  ): ValidatorFn {
    return (c: AbstractControl) => {
      const reg  = new RegExp(pattern);

      const result = reg.test(c.value);

      if (result) {
          return null;
      }

      return {invalidPassword: true, message: errorMessage};

    };
  }


  /**
   * @description Validate a value is a number
   */
  static ValidNumber(): ValidatorFn {
    return (c: AbstractControl) => {

      if (isNaN(c.value)) {
        return {isNotANumber: true, message: 'Value is not a number'};
      }

      return null;

    };
  }

  /**
   * @description Validates that a value (number) falls under a number range
   * @param startingNumber The beginning of the number range
   * @param endingNumber The end of the number range
   */
  static ValidNumberRange(startingNumber: number, endingNumber: number): ValidatorFn {
    return (c: AbstractControl) => {

      const numb = +c.value;


      if (numb < startingNumber || numb > endingNumber) {

        // console.log(typeof(numb));
        return { invalidNumberRange: true, message: `Between ${startingNumber} and ${endingNumber}` };
      }

      return null;

    };
  }

  static ValidUrl(c: AbstractControl): ValidationErrors {
    const url = c.value;

    if (!url) { return null; }

    const urlRegex = new RegExp(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/);

    const success = urlRegex.test(url);

    if (success) { return null; }

    return { invalidUrl: true, message: 'Invalid Url' };
  }

  static Alphanumeric(c: AbstractControl): ValidationErrors {
    const url = c.value;

    if (!url) { return null; }

    const urlRegex = new RegExp(/^(?=.*[A-Za-z0-9])[A-Za-z0-9_]*$/);

    const success = urlRegex.test(url);

    if (success) { return null; }

    return { invalidUrl: true, message: 'Invalid characters found' };
  }
}


// ^(?=.*[A-Za-z0-9])[A-Za-z0-9 _]*$
