import { FormBuilder, FormGroup } from "@angular/forms";
import { CustomValidator } from "src/app/validations/custom-validators";


export class MakeDonationFunctions {

  static createForm(fb: FormBuilder): FormGroup
  {
    return fb.group({
      name: [null, [CustomValidator.CustomRequired('Name'), CustomValidator.MinLength(1), CustomValidator.MaxLength(128)]],
      email: [null, [CustomValidator.CustomRequired('Email'), CustomValidator.CustomEmail]],
      amount: [null, [CustomValidator.CustomRequired('Amount'), CustomValidator.isNumber]],
      phone_number: [null],
    });
  }

}
