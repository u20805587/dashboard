import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Project} from "../project/project.model";
import {Observable} from "rxjs";
import {SiteWorker} from "./worker.model";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  readonly baseUrl = 'http://localhost:8080/api/worker';

  constructor(private http: HttpClient) {
  }

  addWorker(body: SiteWorker): Observable<SiteWorker> {
    return this.http.post<SiteWorker>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getWorkers(): Observable<SiteWorker[]> {
    return this.http.get<SiteWorker[]>(`${this.baseUrl}`);
  }
}
