import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment'
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticatedEmployee = false;
  authenticatedAdmin = false;
  baseEmployeeUrl = environment.baseEmployeeUrl;
  baseAdminUrl = environment.baseAdminUrl;

  constructor(private http: HttpClient) {

  }

  public employeeObject: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  registerUser(user: User) {
    return this.http.post(this.baseEmployeeUrl, user);
  }

  loginEmployee(employeeObject): Observable<boolean> {
    return this.http.get<User[]>(this.baseEmployeeUrl + '?email=' + employeeObject['email']).pipe(
      map(data => {
        if (data) {
          if (data.some(user => user.email == employeeObject['email'] && user.password == employeeObject['password'])) {
            localStorage["empId"] = employeeObject.id
            this.employeeObject.next(data);
            this.authenticatedEmployee = true;
            return true
          } else {
            this.authenticatedEmployee = false;
            return false
          }
        }
      })
    )
  }

  loginAdmin(userId: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.baseAdminUrl + '?email=' + userId).pipe(
      map(data => {
        if (data) {
          if (data.some(user => user.email == userId && user.password == password)) {
            this.authenticatedAdmin = true;
            return true
          } else {
            this.authenticatedAdmin = false;
            return false
          }
        }
      })
    )
  }

  isAuthenticatedEmployee() {
    return this.authenticatedEmployee;
  }
  isAuthenticatedAdmin() {
    return this.authenticatedAdmin;
  }

}
