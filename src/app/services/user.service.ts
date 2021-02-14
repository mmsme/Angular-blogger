import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://mmustafablog.herokuapp.com/user';
  constructor(private http: HttpClient) {}

  getProfileInf(): any {
    return this.http.get(this.url + '/profile', this.setHeaders());
  }

  getFollowing(): any {
    return this.http.get(this.url + '/followers', this.setHeaders());
  }

  private setHeaders(): any {
    const token = localStorage.getItem('user') || '';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', JSON.parse(token));
    return { headers };
  }
}
