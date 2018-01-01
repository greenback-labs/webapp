import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRouting } from '../person/person.routing';

import { PersonService } from './shared/person.service';

import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  imports: [
    CommonModule,
    PersonRouting
  ],
  declarations: [
    PersonFormComponent,
    PersonListComponent
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
