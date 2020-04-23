import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ManageReferralsComponent } from './components/manage-referral.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
      DashboardComponent,
      ManageReferralsComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],

  })
  export class DashboardModule { }
