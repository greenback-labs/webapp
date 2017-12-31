import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Transaction } from './transaction.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TransactionService {
  private url;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8001/transactions';
  }

  getRecordsTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url).pipe(
      catchError(this.handleError('getRecordsTransaction', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
