import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Project} from "../project/project.model";
import {Observable} from "rxjs";
import {Worker} from "./worker.model";

@Injectable({
  providedIn: 'root'
})
export class WorkerApiService {

  readonly baseUrl = 'http://localhost:8080/api/worker';

  constructor(private http: HttpClient) {
  }

  addWorker(body: Worker): Observable<Worker> {
    return this.http.post<Worker>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${this.baseUrl}`);
  }

 getWorker(workerId: string): Observable<Worker> {
    return this.http.get<Worker>(`${this.baseUrl}/${workerId}`);
  }
}
