import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { PersonComponent } from './person/person.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: '/', redirectTo: '/accounts', pathMatch: 'full' },
  { path: '/accounts', component: AccountComponent },
  { path: '/categories', component: CategoryComponent },
  { path: '/persons', component: PersonComponent },
  { path: '/transactions', component: TransactionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
