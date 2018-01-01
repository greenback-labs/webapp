import { Component, OnInit } from '@angular/core';

import { Account } from '../shared/account.model';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  recordsAccount: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getRecordsAccount();
  }

  getRecordsAccount(): void {
    this.accountService.getRecordsAccount().subscribe(response => this.recordsAccount = response['data']);
  }
}
