import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRouting } from './category.routing';

import { CategoryService } from './shared/category.service';

import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRecordComponent } from './category-record/category-record.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRouting
  ],
  declarations: [
    CategoryFormComponent,
    CategoryListComponent,
    CategoryRecordComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
