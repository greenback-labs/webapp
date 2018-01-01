import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  recordsCategory: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getRecordsCategory();
  }

  getRecordsCategory(): void {
    this.categoryService.getRecordsCategory().subscribe(response => this.recordsCategory = response['data']);
  }
}
