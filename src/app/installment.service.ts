import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Installment } from './installment.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InstallmentService {
  private url;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8001/installments';
  }

  getRecordsInstallment(): Observable<Installment[]> {
    return this.http.get<Installment[]>(this.url).pipe(
      catchError(this.handleError('getRecordsInstallment', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
