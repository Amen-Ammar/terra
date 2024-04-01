import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiURL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/tasks`);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/tasks/${id}`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/tasks`, task);
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/tasks/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/tasks/${id}`);
  }
}
