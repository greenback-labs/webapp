import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/person.model';

@Component({
  selector: 'app-person-record',
  templateUrl: './person-record.component.html',
  styleUrls: ['./person-record.component.css']
})
export class PersonRecordComponent implements OnInit {
  @Input() recordsPerson: Person[];

  constructor() { }

  ngOnInit() { }
}
