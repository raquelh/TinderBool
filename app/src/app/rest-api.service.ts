import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { catchError, tap, map } from 'rxjs/operators';
import jsSHA from 'jssha';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};
const apiUrl = "https://api.com";

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Um erro ocorreu:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`API retornou o código ${error.status}: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Algo de errado ocorreu, tente novamente em alguns minutos.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private encrypt(text: string) {
    let shaObj = new jsSHA("SHA-256", "TEXT");
    shaObj.update(text);
    return shaObj.getHash("HEX");
  }

  login(email: string, password: string): Observable<any> {
    let passwordHash = this.encrypt(password);

    const url = `${apiUrl}/sportsman?email=${email}&password=${passwordHash}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

}
