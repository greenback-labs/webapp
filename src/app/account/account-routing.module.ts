import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountListComponent } from './account-list/account-list.component';

const routes: Routes = [
  { path: 'accounts', component: AccountListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
