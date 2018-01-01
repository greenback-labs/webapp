import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRouting } from './category.routing';

import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRouting
  ],
  declarations: [
    CategoryFormComponent,
    CategoryListComponent
  ]
})
export class CategoryModule { }
