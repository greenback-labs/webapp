import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/person.model';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  recordsPerson: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getRecordsPerson();
  }

  getRecordsPerson(): void {
    this.personService.getRecordsPerson().subscribe(response => this.recordsPerson = response['data']);
  }
}
