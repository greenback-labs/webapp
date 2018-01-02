import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../shared/account.model';

@Component({
  selector: 'app-account-record',
  templateUrl: './account-record.component.html',
  styleUrls: ['./account-record.component.css']
})
export class AccountRecordComponent implements OnInit {
  @Input() recordsAccount: Account[];

  constructor() { }

  ngOnInit() { }
}
