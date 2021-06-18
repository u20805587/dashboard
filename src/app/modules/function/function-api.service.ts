import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Function} from "./function.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FunctionApiService {

  readonly baseUrl = 'http://localhost:8080/api/function';

  constructor(private http: HttpClient) {
  }

  addFunction(body: Function): Observable<Function> {
    return this.http.post<Function>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>(`${this.baseUrl}`);
  }

 getFunction(functionId: string): Observable<Function> {
    return this.http.get<Function>(`${this.baseUrl}/${functionId}`);
  }

}
