import { Routes, RouterModule } from '@angular/router';

import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  { path: 'categories',
    children: [
      { path: '', component: CategoryListComponent },
      { path: ':id', component: CategoryFormComponent }
    ]
  }
];

export const CategoryRouting = RouterModule.forChild(routes);
