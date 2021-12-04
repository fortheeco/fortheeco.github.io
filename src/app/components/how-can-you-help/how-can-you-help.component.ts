import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeDonationsComponent } from 'src/app/modals/make-donations/make-donations.component';

@Component({
  selector: 'app-how-can-you-help',
  templateUrl: './how-can-you-help.component.html',
  styleUrls: ['./how-can-you-help.component.scss']
})
export class HowCanYouHelpComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  beginDonation(): void {
    this.modalService.open(MakeDonationsComponent);
  }

}
