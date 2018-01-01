import { Routes, RouterModule } from '@angular/router';

import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  { path: 'persons',
    children: [
      { path: '', component: PersonListComponent },
      { path: ':id', component: PersonFormComponent }
    ]
  }
];

export const PersonRouting = RouterModule.forChild(routes);
