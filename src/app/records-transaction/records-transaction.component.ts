import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-records-transaction',
  templateUrl: './records-transaction.component.html',
  styleUrls: ['./records-transaction.component.css']
})
export class RecordsTransactionComponent implements OnInit {
  recordsTransaction: Transaction;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getRecordsTransaction();
  }

  getRecordsTransaction(): void {
    this.transactionService.getRecordsTransaction().subscribe(response => this.recordsTransaction = response['data']);
  }
}
