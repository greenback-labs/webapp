import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Installment } from '../installment.model';
import { InstallmentService } from '../installment.service';

@Component({
  selector: 'app-records-installment',
  templateUrl: './records-installment.component.html',
  styleUrls: ['./records-installment.component.css']
})
export class RecordsInstallmentComponent implements OnInit {
  recordsInstallment: Installment[];

  constructor(private installmentService: InstallmentService) { }

  ngOnInit() {
    this.getRecordsInstallment();
  }

  getRecordsInstallment(): void {
    this.installmentService.getRecordsInstallment().subscribe(response => this.recordsInstallment = response['data']);
  }
}
