import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ProjectaAPIResponse } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private url = 'https://www.boredapi.com/api/activity';

  constructor(private http: HttpClient) {}

  fetchData(url?: string): Observable<ProjectaAPIResponse> {
    // setTimeout(() => {}, 1000);
    return this.http.get<ProjectaAPIResponse>(url || this.url).pipe(
      tap((data) => JSON.stringify(data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: ErrorEvent) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${error?.error?.message}`;
    } else {
      errorMessage = `Server returned code: ${error?.error?.status}, error message is: ${error?.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
