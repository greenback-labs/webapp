import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Person } from './person.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PersonService {
  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8001/persons';
  }
  
  getRecordsPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl).pipe(
      catchError(this.handleError('getRecordsPerson', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
