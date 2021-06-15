import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SubTask} from "./subtask.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubTaskApiService {

  readonly baseUrl = 'http://localhost:8080/api/subtask';

  constructor(private http: HttpClient) {
  }

  addSubTask(body: SubTask): Observable<SubTask> {
    return this.http.post<SubTask>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getSubTasks(): Observable<SubTask[]> {
    return this.http.get<SubTask[]>(`${this.baseUrl}`);
  }

 getSubTask(id: number): Observable<SubTask> {
    return this.http.get<SubTask>(`${this.baseUrl}/${id}`);
  }

}
