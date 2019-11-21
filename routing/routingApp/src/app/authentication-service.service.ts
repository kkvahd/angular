import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  isLoggedIn = false;

  baseurl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post(this.baseurl, user);
  }

  login(userId: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.baseurl + '?email=' + userId).pipe(
      map(data => {
        if (data) {
          if (data.some(user => user.email == userId && user.password == password)) {
            this.isLoggedIn = true;
            return true
          } else {
            this.isLoggedIn = false;
            return false
          }
        }

      })
    )
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
