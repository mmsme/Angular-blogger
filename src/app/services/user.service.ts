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

  searchByUsername(username: any): any {
    return this.http.get(this.url + '/name/' + username, this.setHeaders());
  }

  followFlag(users: any[]): boolean {
    const uid = JSON.parse(localStorage.getItem('uid') || '');
    const exist = users.includes(uid);
    console.log(exist);
    return exist ? true : false;
  }

  private setHeaders(): any {
    const token = localStorage.getItem('user') || '';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', JSON.parse(token));
    return { headers };
  }
}
