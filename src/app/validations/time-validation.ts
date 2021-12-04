import { ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { AppConstants } from '../core/models/app-constants';
// import { AppConstants } from '../domain/constants';


/**
 * @description Thses are Validations that are focused on time
 */
export class TimeValidator {

  /**
   * @description Valids a string is a valid date
   * @param fieldName The field name to attached the error message to
   */
  static CustomValidDate(fieldName: string): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.parent) { return null; }

      if (!c.parent.get(fieldName).value) { return null; }

      if (moment.isDate(c.parent.get(fieldName).value)) { return null; }

      return { message: `Date is invalid`};
    };
  }

  /**
   * @description Valid the date falls after specified timeframe
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
  static CustomAfter(
    dateField: string,
    date: Date = new Date()
    ): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.parent) { return null; }

      if (!c.parent.get(dateField).value) { return null; }

      const validDate = TimeValidator.CustomValidDate(dateField)(c);

      if (validDate) { return { ...validDate }; }

      // [year, month, day, hour, minute, second, millisecond]

      let dob = (moment(c.parent.get(dateField).value));
      dob = moment([dob.year(), dob.month(), dob.date()]);

      let currentDate = moment(date);
      currentDate = moment([currentDate.year(), currentDate.month(), currentDate.date()])

      if (!dob.isAfter(currentDate)) {
        return { message: `Must be after ${currentDate.toDate().toDateString()}`};
      }

      return null;

    };
  }

  /**
   * @description Valid the date falls after specified timeframe
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
   static CustomSameOrAfter(
    fieldName: string, date: Date = new Date()
    ): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.value) { return null; }

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      // [year, month, day, hour, minute, second, millisecond]

      let dob = (moment(c.value));
      dob = moment([dob.year(), dob.month(), dob.date()])

      let currentDate = moment(date);
      currentDate = moment([currentDate.year(), currentDate.month(), currentDate.date()])

      if (!dob.isSameOrAfter(currentDate)) {
        return { message: `Must be same or after ${currentDate.toDate().toDateString()}`};
      }

      return null;

    };
  }

  /**
   * @description Valid the date falls after specified timeframe from field
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
   static CustomAfterDateField(
    fieldName: string,
    ): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.value) { return null; }

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      let dob = (moment(c.value));
      dob = moment([dob.year(), dob.month(), dob.date()])

      if (!c.parent) { return null; }

      if (!c.parent.get(fieldName).value) { return null; }
      if (!moment.isDate(c.parent.get(fieldName).value)) { return null; }

      let fieldDate = moment(c.parent.get(fieldName).value);
      fieldDate = moment([fieldDate.year(), fieldDate.month(), fieldDate.date()]);

      if (!dob.isAfter(fieldDate)) {
        return { message: `Must be after ${fieldDate.toDate().toDateString()}`};
      }

      return null;

    };
   }

  /**
   * @description Valid the date falls after specified timeframe from field
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
   static CustomSameOrAfterDateField(
    fieldName: string
    ): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.value) { return null; }

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      let dob = (moment(c.value));
      dob = moment([dob.year(), dob.month(), dob.date()])

      if (!c.parent) { return null; }

      if (!c.parent.get(fieldName).value) { return null; }
      if (!moment.isDate(c.parent.get(fieldName).value)) { return null; }

      let fieldDate = moment(c.parent.get(fieldName).value);
      fieldDate = moment([fieldDate.year(), fieldDate.month(), fieldDate.date()]);

      if (!dob.isSameOrAfter(fieldDate)) {
        return { message: `Must be same or after ${fieldDate.toDate().toDateString()}`};
      }

      return null;

    };
  }

  /**
   * @description Valid the date falls after specified timeframe
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
  static CustomBefore(
    fieldName: string, date: Date = new Date()
    ): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.value) { return null; }

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      let dob = (moment(c.value));
      dob = moment([dob.year(), dob.month(), dob.date()])

      let currentDate = moment(date);
      currentDate = moment([currentDate.year(), currentDate.month(), currentDate.date()]);

      if (!dob.isBefore(currentDate)) {
        return { message: `Must be before ${currentDate.toDate().toDateString()}`};
      }
        return null;

    };
  }

  /**
   * @description Valid the date falls after specified timeframe
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
   static CustomSameOrBefore(
    fieldName: string, date: Date = new Date()
    ): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.value) { return null; }

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      let dob = (moment(c.value));
      dob = moment([dob.year(), dob.month(), dob.date()])

      let currentDate = moment(date);
      currentDate = moment([currentDate.year(), currentDate.month(), currentDate.date()]);

      if (!dob.isSameOrBefore(currentDate)) {
        return { message: `Must be same or before ${currentDate.toDate().toDateString()}`};
      }
        return null;
    };
  }

/**
   * @description Valid the date falls before specified timeframe from field
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
 static CustomBeforeDateField(
  fieldName: string
  ): ValidatorFn {
  return (c: AbstractControl) => {

    if (!c.value) { return null; }

    const validDate = TimeValidator.CustomValidDate(fieldName)(c);

    if (validDate) { return { ...validDate }; }

    let dob = (moment(c.value));
    dob = moment([dob.year(), dob.month(), dob.date()])

    if (!c.parent) { return null; }

    if (!c.parent.get(fieldName).value) { return null; }
    if (!moment.isDate(c.parent.get(fieldName).value)) { return null; }

    let fieldDate = moment(c.parent.get(fieldName).value);
    fieldDate = moment([fieldDate.year(), fieldDate.month(), fieldDate.date()]);

    if (!dob.isBefore(fieldDate)) {
      return { message: `Must be before ${fieldDate.toDate().toDateString()}`};
    }

    return null;

  };
 }

/**
   * @description Valid the date falls before specified timeframe from field
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
 static CustomSameOrBeforeDateField(
  fieldName: string
  ): ValidatorFn {
  return (c: AbstractControl) => {

    if (!c.value) { return null; }

    const validDate = TimeValidator.CustomValidDate(fieldName)(c);

    if (validDate) { return { ...validDate }; }

    let dob = (moment(c.value));
    dob = moment([dob.year(), dob.month(), dob.date()])

    if (!c.parent) { return null; }

    if (!c.parent.get(fieldName).value) { return null; }
    if (!moment.isDate(c.parent.get(fieldName).value)) { return null; }

    let fieldDate = moment(c.parent.get(fieldName).value);
    fieldDate = moment([fieldDate.year(), fieldDate.month(), fieldDate.date()]);

    if (!dob.isSameOrBefore(fieldDate)) {
      return { message: `Must be same or before ${fieldDate.toDate().toDateString()}`};
    }

    return null;

  };
 }

/**
   * @description Validates the required maximum number of days for a task, extension is allowed
   * @param fieldName The field name to attached the error message to
   */
 static CustomDateDiffRequirement(
   startField: string,
   startTimeField: string,
   endField: string,
   endTimeField: string,
   maximumInDays: number = 30
  ): ValidatorFn {
   return (c: AbstractControl) => {

    if (!c.parent) { return null; }

    // [year, month, day, hour, minute, second, millisecond]

    let startTime: number = c.parent.get(startTimeField).value;
    if (!startTime && startTime != 0) {return null; }
    if (startTime < 0 || startTime > 23) { return null; }


    if (!moment.isDate(c.parent.get(startField).value)) { return null; }
    let startDate = (moment(c.parent.get(startField).value));
    startDate = moment([startDate.year(), startDate.month(), startDate.date(), startTime])


    let endTime: number = c.parent.get(endTimeField).value;
    if (!endTime && endTime != 0) {return null; }
    if (endTime < 0 || endTime > 23) { return null; }

    if (!moment.isDate(c.parent.get(endField).value)) { return null; }
    let endDate = moment(c.parent.get(endField).value);
    endDate = moment([endDate.year(), endDate.month(), endDate.date(), endTime]);

    const dif = endDate.diff(startDate, 'days');

    if (dif > 30 || dif < 0) {
      return { message: `Limit of 0 and ${maximumInDays} days `};
    }

    const difInHours = endDate.diff(startDate, 'hours');

     if (difInHours < 0) {
      return { message: `Invalid hours difference`};
    }

    return null;

  };
}

  /**
   * @deprecated Please dont use this code, it has some serious bug (uder maintenance)
   * @description Valid the date fall within a certain range
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
  static CustomValidDateRange(
    fieldName: string, minAge: number = AppConstants.MIN_DATE, maxAge: number = AppConstants.MAX_DATE
    ): ValidatorFn {
    return (c: AbstractControl) => {

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      const dob = (moment(c.value));

      if (dob.isAfter(moment().subtract(maxAge, 'year')) || dob.isBefore(moment().subtract(minAge, 'year'))) {
        return { message: `Must be  between ${minAge} and ${maxAge} years from now`};
      }

      return null;

    };
  }


}

