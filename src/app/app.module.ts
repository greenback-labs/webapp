import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountFormComponent } from './account/account-form/account-form.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonFormComponent } from './person/person-form/person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountFormComponent,
    CategoryFormComponent,
    CategoryListComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
