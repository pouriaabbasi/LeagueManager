import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private _baseUrl = "http://localhost:5000/api/";
  constructor(
    private http: HttpClient
  ) { }

  public Get<T>(url: string): Observable<T> {
    return this.http.get<T>(this._baseUrl + url);
  }

  public Post<T>(url: string, model: any): Observable<T> {
    return this.http.post<T>(this._baseUrl + url, model);
  }

  public Put<T>(url: string, model: any): Observable<T> {
    return this.http.put<T>(this._baseUrl + url, model);
  }

  public Delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
