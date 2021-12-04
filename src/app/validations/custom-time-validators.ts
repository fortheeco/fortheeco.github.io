import { ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { ApplicationConstants } from '../domains/constants/application-constants';
// import { ApplicationConstants } from '../domain/constants';


/**
 * @description Thses are Validations that are focused on time
 */
export class CustomTimeValidator {

  /**
   * @description Validates a string if it is a valid date
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
   * @param dateField The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
  static CustomAfter(
    dateField: string,
    dateTime: string,
    date: Date = new Date()
    ): ValidatorFn {
    return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        if (!c.parent.get(dateField).value) { return null; }

        if (c.parent.get(dateTime).value!= 0 && !c.parent.get(dateTime).value) { return null; }

        const validDate = CustomTimeValidator.CustomValidDate(dateField)(c);

        if (validDate) { return { ...validDate }; }

        // [year, month, day, hour, minute, second, millisecond]

        let dob = (moment(c.parent.get(dateField).value));
        dob = moment([dob.year(), dob.month(), dob.date(), c.parent.get(dateTime).value]);

        let currentDate = moment(date);
        currentDate = moment([currentDate.year(), currentDate.month(), currentDate.date(), currentDate.hours() +1 ])

        if (!dob.isAfter(currentDate)) {
            return { message: `Must be after ${currentDate.format('Do MMM YY, H:00')}`};
        } 

        return null;

    };
  }

  /**
   * @description Valid the date falls after specified timeframe
   * @param dateField The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
   static CustomSameOrAfter(
    dateField: string,
    dateTime: string,
    date: Date = new Date()
    ): ValidatorFn {
    return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        if (!c.parent.get(dateField).value) { return null; }

        if (c.parent.get(dateTime).value!= 0 && !c.parent.get(dateTime).value) { return null; }

        const validDate = CustomTimeValidator.CustomValidDate(dateField)(c);

        if (validDate) { return { ...validDate }; }

        // [year, month, day, hour, minute, second, millisecond]
        let dob = (moment(c.parent.get(dateField).value));
        dob = moment([dob.year(), dob.month(), dob.date(), c.parent.get(dateTime).value]);

        let currentDate = moment(date);
        currentDate = moment([currentDate.year(), currentDate.month(), currentDate.date(), currentDate.hours() + 1]);

        if (!dob.isSameOrAfter(currentDate)) {
            return { message: `Same or after ${currentDate.format('Do MMM YY, H:00')}`};
        }

        return null;
    };
  }

  /**
   * @description Valid the date falls after specified timeframe from field
   * @param dateField The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
   static CustomAfterDateField(
        dateField: string,
        dateTime: string,
        otherDateField: string,
        otherDateTime: string,
    ): ValidatorFn {
    return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        if (!c.parent.get(dateField).value) { return null; }

        if (c.parent.get(dateTime).value != 0 && !c.parent.get(dateTime).value) { return null; }
        
        if (!c.parent.get(otherDateField).value) { return null; }

        if (c.parent.get(otherDateTime).value!= 0 && !c.parent.get(otherDateTime).value) { return null; }

        const validDate = CustomTimeValidator.CustomValidDate(dateField)(c);

        if (validDate) { return { ...validDate }; }

        let fieldDate = (moment(c.parent.get(dateField).value));
        fieldDate = moment([fieldDate.year(), fieldDate.month(), fieldDate.date(), c.parent.get(dateTime).value])
        
        let otherFieldDate = moment(c.parent.get(otherDateField).value);
        otherFieldDate = moment([otherFieldDate.year(), otherFieldDate.month(), otherFieldDate.date(), c.parent.get(otherDateTime).value]);

        if (!fieldDate.isAfter(otherFieldDate)) {
            return { message: `Must be after ${otherFieldDate.format('Do MMM YY, H:00')}`};
        }

        return null;
    };
   }
  
  /**
   * @description Valid the date falls after specified timeframe from field
   * @param dateField The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
   static CustomSameOrAfterDateField(
    dateField: string,
    dateTime: string,
    otherDateField: string,
    otherDateTime: string,
    ): ValidatorFn {
    return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        if (!c.parent.get(dateField).value) { return null; }

        if (c.parent.get(dateTime).value != 0 && !c.parent.get(dateTime).value) { return null; }
        
        if (!c.parent.get(otherDateField).value) { return null; }

        if (c.parent.get(otherDateTime).value!= 0 && !c.parent.get(otherDateTime).value) { return null; }

        const validDate = CustomTimeValidator.CustomValidDate(dateField)(c);

        if (validDate) { return { ...validDate }; }

        let fieldDate = (moment(c.parent.get(dateField).value));
        fieldDate = moment([fieldDate.year(), fieldDate.month(), fieldDate.date(), c.parent.get(dateTime).value])
        
        let otherFieldDate = moment(c.parent.get(otherDateField).value);
        otherFieldDate = moment([otherFieldDate.year(), otherFieldDate.month(), otherFieldDate.date(), c.parent.get(otherDateTime).value]);

        if (!otherFieldDate.isSameOrAfter(fieldDate)) {
            return { message: `Same or after ${fieldDate.format('Do MMM YY, H:00')}`};
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
    dateField: string,
    dateTime: string,
    date: Date = new Date()
    ): ValidatorFn {
    return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        if (!c.parent.get(dateField).value) { return null; }

        if (c.parent.get(dateTime).value!= 0 && !c.parent.get(dateTime).value) { return null; }

        const validDate = CustomTimeValidator.CustomValidDate(dateField)(c);

        if (validDate) { return { ...validDate }; }

        // [year, month, day, hour, minute, second, millisecond]

        let dob = (moment(c.parent.get(dateField).value));
        dob = moment([dob.year(), dob.month(), dob.date(), c.parent.get(dateTime).value]);

        let currentDate = moment(date);
        currentDate = moment([currentDate.year(), currentDate.month(), currentDate.date(), currentDate.hours()])

        if (!dob.isBefore(currentDate)) {
            return { message: `Must be before ${currentDate.format('Do MMM YY, H:00')}`};
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
    dateField: string,
    dateTime: string,
    date: Date = new Date()
    ): ValidatorFn {
    return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        if (!c.parent.get(dateField).value) { return null; }

        if (c.parent.get(dateTime).value!= 0 && !c.parent.get(dateTime).value) { return null; }

        const validDate = CustomTimeValidator.CustomValidDate(dateField)(c);

        if (validDate) { return { ...validDate }; }

        // [year, month, day, hour, minute, second, millisecond]
        let dob = (moment(c.parent.get(dateField).value));
        dob = moment([dob.year(), dob.month(), dob.date(), c.parent.get(dateTime).value]);

        let currentDate = moment(date);
        currentDate = moment([currentDate.year(), currentDate.month(), currentDate.date(), currentDate.hours()]);

        if (!dob.isSameOrBefore(currentDate)) {
            return { message: `Must be same or before ${currentDate.format('Do MMM YY, H:00')}`};
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
        dateField: string,
        dateTime: string,
        otherDateField: string,
        otherDateTime: string,
    ): ValidatorFn {
    return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        if (!c.parent.get(dateField).value) { return null; }

        if (c.parent.get(dateTime).value != 0 && !c.parent.get(dateTime).value) { return null; }
        
        if (!c.parent.get(otherDateField).value) { return null; }

        if (c.parent.get(otherDateTime).value!= 0 && !c.parent.get(otherDateTime).value) { return null; }

        const validDate = CustomTimeValidator.CustomValidDate(dateField)(c);

        if (validDate) { return { ...validDate }; }

        let fieldDate = (moment(c.parent.get(dateField).value));
        fieldDate = moment([fieldDate.year(), fieldDate.month(), fieldDate.date(), c.parent.get(dateTime).value])
        
        let otherFieldDate = moment(c.parent.get(otherDateField).value);
        otherFieldDate = moment([otherFieldDate.year(), otherFieldDate.month(), otherFieldDate.date(), c.parent.get(otherDateTime).value]);

        if (!otherFieldDate.isBefore(fieldDate)) {
            return { message: `Must be before ${fieldDate.format('Do MMM YY, H:00')}`};
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
    dateField: string,
    dateTime: string,
    otherDateField: string,
    otherDateTime: string,
    ): ValidatorFn {
    return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        if (!c.parent.get(dateField).value) { return null; }

        if (c.parent.get(dateTime).value != 0 && !c.parent.get(dateTime).value) { return null; }
        
        if (!c.parent.get(otherDateField).value) { return null; }

        if (c.parent.get(otherDateTime).value!= 0 && !c.parent.get(otherDateTime).value) { return null; }

        const validDate = CustomTimeValidator.CustomValidDate(dateField)(c);

        if (validDate) { return { ...validDate }; }

        let fieldDate = (moment(c.parent.get(dateField).value));
        fieldDate = moment([fieldDate.year(), fieldDate.month(), fieldDate.date(), c.parent.get(dateTime).value])
        
        let otherFieldDate = moment(c.parent.get(otherDateField).value);
        otherFieldDate = moment([otherFieldDate.year(), otherFieldDate.month(), otherFieldDate.date(), c.parent.get(otherDateTime).value]);

        if (!otherFieldDate.isSameOrBefore(fieldDate)) {
            return { message: `Must be same or before ${fieldDate.format('Do MMM YY, H:00')}`};
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
     
     if (difInHours <= 0) {
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
    fieldName: string, minAge: number = ApplicationConstants.MIN_DATE, maxAge: number = ApplicationConstants.MAX_DATE
    ): ValidatorFn {
    return (c: AbstractControl) => {

      const validDate = CustomTimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      const dob = (moment(c.value));

      if (dob.isAfter(moment().subtract(maxAge, 'year')) || dob.isBefore(moment().subtract(minAge, 'year'))) {
        return { message: `Must be  between ${minAge} and ${maxAge} years from now`};
      }

      return null;

    };
  }


}

