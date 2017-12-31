import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-records-account',
  templateUrl: './records-account.component.html',
  styleUrls: ['./records-account.component.css']
})
export class RecordsAccountComponent implements OnInit {
  recordsAccount: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getRecordsAccount();
  }

  getRecordsAccount(): void {
    this.accountService.getRecordsAccount().subscribe(response => this.recordsAccount = response['data']);
  }
}
