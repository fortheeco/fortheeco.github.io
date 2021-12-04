import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Flutterwave, InlinePaymentOptions, PaymentSuccessResponse } from 'flutterwave-angular-v3';
import { CustomErrorService } from 'src/app/services/custom-error/custom-error.service';
import { CustomToastService } from 'src/app/services/custom-toast/custom-toast.service';
import { environment } from 'src/environments/environment';
import { MakeDonationFunctions } from './make-donations-functions';

@Component({
  selector: 'app-make-donations',
  templateUrl: './make-donations.component.html',
  styleUrls: ['./make-donations.component.scss']
})
export class MakeDonationsComponent implements OnInit {

  donateForm: FormGroup;

  loading = false;

  customerDetails;

  customizations = {title: 'ECO Donation', description: 'Donation for ECO summit on 20th December, 2021.', logo: 'https://res.cloudinary.com/eco-africa-global/image/upload/v1609616504/pere/single_logo_ix2vvs.jpg'}

  meta = {'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd'}

  paymentData: InlinePaymentOptions;

  response: PaymentSuccessResponse;

  constructor(
    public activeModal: NgbActiveModal,
    public errorService: CustomErrorService,
    private fb: FormBuilder,
    private toastService: CustomToastService,
    private flutterwave: Flutterwave
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.donateForm = MakeDonationFunctions.createForm(this.fb);
  }

  donate(): void {
    if (this.donateForm.invalid) { this.errorService.validateAllFields(this.donateForm); return }

    this.loading = true;

    this.setData();

    this.flutterwave.inlinePay(this.paymentData);
  }

  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }

  makePaymentCallback(response: PaymentSuccessResponse): void {

    this.response = this.response;
  }

  closedPaymentModal(): void {
    console.log(this.response);
    this.activeModal.close();
  }

  setData(): void {
    this.paymentData = {
      public_key: environment.flutterPublicKey,
      tx_ref: this.generateReference(),
      amount: this.donateForm.get('amount').value,
      currency: 'NGN',
      payment_options: 'card,ussd',
      redirect_url: window.location.origin,
      meta: this.meta,
      customer: this.donateForm.value,
      customizations: this.customizations,
      callback: this.makePaymentCallback,
      onclose: this.closedPaymentModal,
      callbackContext: this
    }
  }

}
