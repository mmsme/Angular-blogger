import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userInfo: any): Observable<boolean> {
    return this.http
      .post('https://mmustafablog.herokuapp.com/user/login', userInfo)
      .pipe(
        map((response: any) => {
          if (response && response.token) {
            localStorage.setItem('user', JSON.stringify(response.token));
            return true;
          }

          return false;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    const jwt = new JwtHelperService();
    const token: any = localStorage.getItem('user');

    if (!token) {
      return false;
    }

    const isExpired = jwt.isTokenExpired(token);

    return !isExpired;
  }
}
