import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../shared/category.model';

@Component({
  selector: 'app-category-record',
  templateUrl: './category-record.component.html',
  styleUrls: ['./category-record.component.css']
})
export class CategoryRecordComponent implements OnInit {
  @Input() recordsCategory: Category[];

  constructor() { }

  ngOnInit() { }
}
