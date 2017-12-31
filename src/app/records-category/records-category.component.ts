import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-records-category',
  templateUrl: './records-category.component.html',
  styleUrls: ['./records-category.component.css']
})
export class RecordsCategoryComponent implements OnInit {
  recordsCategory: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getRecordsCategory();
  }

  getRecordsCategory(): void {
    this.categoryService.getRecordsCategory().subscribe(response => this.recordsCategory = response['data']);
  }
}
