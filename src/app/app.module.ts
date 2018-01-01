import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';

import { AccountModule } from './account/account.module';
import { CategoryModule } from './category/category.module';
import { PersonModule } from './person/person.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AccountModule,
    CategoryModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
