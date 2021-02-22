import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://mmustafablog.herokuapp.com/user';
  constructor(private http: HttpClient) {}

  getAllUsers(): any {
    return this.http.get(this.url, this.setHeaders());
  }

  getProfileInf(): any {
    return this.http.get(this.url + '/profile', this.setHeaders());
  }

  getFollowing(): any {
    return this.http.get(this.url + '/followers', this.setHeaders());
  }

  followAuther(autherId: any): any {
    return this.http.post(
      this.url + '/follow/' + autherId,
      '',
      this.setHeaders()
    );
  }

  getUserByName(name: any): any {
    return this.http.get(this.url + '/name/' + name, this.setHeaders());
  }

  private setHeaders(): any {
    const token = localStorage.getItem('user') || '';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', JSON.parse(token));
    return { headers };
  }
}
