import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-records-person',
  templateUrl: './records-person.component.html',
  styleUrls: ['./records-person.component.css']
})
export class RecordsPersonComponent implements OnInit {
  recordsPerson: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getRecordsPerson();
  }

  getRecordsPerson(): void {
    this.personService.getRecordsPerson().subscribe(response => this.recordsPerson = response['data']);
  }
}
