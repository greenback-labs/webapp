import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRouting } from '../category/category.routing';

import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRouting
  ],
  declarations: [
    PersonFormComponent,
    PersonListComponent
  ]
})
export class PersonModule { }
