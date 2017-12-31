import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { InstallmentComponent } from './installment/installment.component';
import { PersonComponent } from './person/person.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RecordsAccountComponent } from './records-account/records-account.component';
import { RecordsCategoryComponent } from './records-category/records-category.component';
import { RecordsPersonComponent } from './records-person/records-person.component';
import { RecordsInstallmentComponent } from './records-installment/records-installment.component';
import { RecordsTransactionComponent } from './records-transaction/records-transaction.component';

import { AccountService } from './account.service';
import { CategoryService } from './category.service';
import { InstallmentService } from './installment.service';
import { PersonService } from './person.service';
import { TransactionService } from './transaction.service';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AccountComponent,
    CategoryComponent,
    InstallmentComponent,
    PersonComponent,
    TransactionComponent,
    RecordsAccountComponent,
    RecordsCategoryComponent,
    RecordsInstallmentComponent,
    RecordsPersonComponent,
    RecordsTransactionComponent
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
