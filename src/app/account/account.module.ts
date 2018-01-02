import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRouting } from './account.routing';

import { AccountService } from './shared/account.service';

import { AccountFormComponent } from './account-form/account-form.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountRecordComponent } from './account-record/account-record.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRouting
  ],
  declarations: [
    AccountFormComponent,
    AccountListComponent,
    AccountRecordComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
