import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordsAccountComponent } from './records-account/records-account.component';
import { RecordsCategoryComponent } from './records-category/records-category.component';
import { RecordsInstallmentComponent } from './records-installment/records-installment.component';
import { RecordsPersonComponent } from './records-person/records-person.component';
import { RecordsTransactionComponent } from './records-transaction/records-transaction.component';

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: 'accounts', component: RecordsAccountComponent },
  { path: 'categories', component: RecordsCategoryComponent },
  { path: 'installments', component: RecordsInstallmentComponent },
  { path: 'persons', component: RecordsPersonComponent },
  { path: 'transactions', component: RecordsTransactionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
