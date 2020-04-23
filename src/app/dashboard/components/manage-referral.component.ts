import { Component, OnInit } from '@angular/core';
// import { ManageReferrals } from '../dashboard.model';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'manage-referrals-camp',
    templateUrl: './manage-referrals.component.html'

  })
  export class ManageReferralsComponent implements OnInit {
      // ManageReferrals: ManageReferrals;
      referralsTotalCount: number;

    constructor() {

    }
    ngOnInit(): void {

    }
  }
