import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "./task.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {

  readonly baseUrl = 'http://localhost:8080/api/task';

  constructor(private http: HttpClient) {
  }

  addTask(body: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}`);
  }

 getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

}
