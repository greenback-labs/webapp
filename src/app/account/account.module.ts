import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRouting } from './account.routing';

import { AccountService } from './shared/account.service';

import { AccountFormComponent } from './account-form/account-form.component';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRouting
  ],
  declarations: [
    AccountFormComponent,
    AccountListComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
