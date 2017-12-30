import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { catchError, map } from "rxjs/operators";

import { Account } from './account.model';

@Injectable()
export class AccountService {

  private accountUrl;

  constructor(
    private http: HttpClient
  ) {
    this.accountUrl = 'http://localhost:8001/accounts'
  }

  getRecordsAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl).pipe(
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
