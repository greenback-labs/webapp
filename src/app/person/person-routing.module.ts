import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  { path: 'persons', component: PersonListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RouterModule
  ]
})
export class PersonRoutingModule { }
