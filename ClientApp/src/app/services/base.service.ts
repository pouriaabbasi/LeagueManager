import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private _baseUrl = "http://localhost:5000/api/";

  constructor(
    private http: HttpClient) { }

  public Get<T>(url): Observable<T> {
    return this.http.get<T>(this._baseUrl + url);
  }
}
