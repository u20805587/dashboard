import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WorkerProject} from "./workerProject.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkerProjectApiService {

  readonly baseUrl = 'http://localhost:8080/api/workerproject';

  constructor(private http: HttpClient) {
  }

  addWorkerProject(body: WorkerProject): Observable<WorkerProject> {
    return this.http.post<WorkerProject>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getWorkerProjects(): Observable<WorkerProject[]> {
    return this.http.get<WorkerProject[]>(`${this.baseUrl}`);
  }

 getWorkerProject(workerId: string,projectId: string): Observable<WorkerProject> {
    return this.http.get<WorkerProject>(`${this.baseUrl}/${workerId}/${projectId}`);
  }

}
