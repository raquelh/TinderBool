import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

/* Nome qualquer, pois não temos isso ainda :) */
const apiUrl = "https://api.com";

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  constructor(private http: HttpClient) { }

  private async handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Um erro ocorreu:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`API retornou o código ${error.status}: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return 0;
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  login(email: string, password: string): Observable<any> {
    const url = `${apiUrl}/sportsman?email=${email}&password=${password}`;
    let result = this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
    return result
  }

}
