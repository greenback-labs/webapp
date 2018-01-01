import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Account } from './account.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {
  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8001/accounts';
  }
  
  getRecordsAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl).pipe(
      catchError(this.handleError('getRecordsAccount', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
