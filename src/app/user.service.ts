import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://dummy.restapiexample.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl + "employees");
  }

  get(id): Observable<any> {
    return this.http.get(baseUrl + "employee/" + id);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl + "create", data);
  }

  update(id, data): Observable<any> {
    return this.http.put(baseUrl + "update/" + id, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(baseUrl + "delete/" + id);
  }

}
