import { Routes, RouterModule } from '@angular/router';

import { AccountFormComponent } from './account-form/account-form.component';
import { AccountListComponent } from './account-list/account-list.component';

const routes: Routes = [
  { path: 'accounts',
    children: [
      { path: '', component: AccountListComponent },
      { path: ':id', component: AccountFormComponent }
    ]
  }
];

export const AccountRouting = RouterModule.forChild(routes);
