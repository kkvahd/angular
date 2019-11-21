import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Employee} from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {
  }
  employeeAdded: Subject<any> = new Subject();
  employeeDeleted: Subject<any> = new Subject();
  baseUrl = 'http://localhost:3000/Employees';

  getEmployees(): Observable<HttpResponse<Employee>> {
    return this.http.get<Employee>(this.baseUrl, {observe: 'response'});
  }
  getEmployeeById(id: number): Observable<HttpResponse<Employee>> {
    return this.http.get<Employee>(this.baseUrl + '\\' + id, {observe: 'response'});
  }
  addEmployee(employee) {
    // return this.http.post(this.baseUrl, employee).pipe(
    //   tap(e => this.employeeAdded.next(e))

    // Using map
    return this.http.post<Employee>(this.baseUrl, employee).pipe(
      // map(res => {
      //   res["name"] = res["name"].toUpperCase()
      //   return res
      // }),
      tap(e => this.employeeAdded.next(e))
    )
  }
  deleteEmployee(id) {
    console.log("------------------DELETE--------------");
    return this.http.delete(this.baseUrl + '\\' + id)
  }
}
