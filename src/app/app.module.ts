import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { PersonComponent } from './person/person.component';
import { RecordsAccountComponent } from './records-account/records-account.component';
import { RecordsCategoryComponent } from './records-category/records-category.component';
import { RecordsPersonComponent } from './records-person/records-person.component';
import { RecordsInstallmentComponent } from './records-installment/records-installment.component';
import { RecordsTransactionComponent } from './records-transaction/records-transaction.component';
import { InstallmentComponent } from './installment/installment.component';
import { TransactionComponent } from './transaction/transaction.component';

import { AccountService } from './account.service';
import { CategoryService } from './category.service';
import { InstallmentService } from './installment.service';
import { PersonService } from './person.service';
import { TransactionService } from './transaction.service';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CategoryComponent,
    AccountComponent,
    PersonComponent,
    RecordsAccountComponent,
    RecordsCategoryComponent,
    RecordsPersonComponent,
    RecordsInstallmentComponent,
    RecordsTransactionComponent,
    InstallmentComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AccountService,
    CategoryService,
    InstallmentService,
    PersonService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
