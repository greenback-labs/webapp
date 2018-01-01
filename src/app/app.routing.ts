import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' }
];

export const AppRouting = RouterModule.forRoot(routes);
