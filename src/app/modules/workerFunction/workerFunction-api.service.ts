import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WorkerFunction} from "./workerFunction.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkerFunctionApiService {

  readonly baseUrl = 'http://localhost:8080/api/workerfunction';

  constructor(private http: HttpClient) {
  }

  addWorkerFunction(body: WorkerFunction): Observable<WorkerFunction> {
    return this.http.post<WorkerFunction>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getWorkerFunctions(): Observable<WorkerFunction[]> {
    return this.http.get<WorkerFunction[]>(`${this.baseUrl}`);
  }

 getWorkerFunction(workerId: string,functionId: string): Observable<WorkerFunction> {
    return this.http.get<WorkerFunction>(`${this.baseUrl}/${workerId}/${functionId}`);
  }

}
