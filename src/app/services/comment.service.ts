import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private url = 'https://mmustafablog.herokuapp.com/comment';
  constructor(private http: HttpClient, private ar: ActivatedRoute) {}

  addComment(postId: any, comment: object): void {
    this.http
      .post(this.url + '/add/' + postId, comment, this.setHeaders())
      .subscribe((res) => {
        window.location.reload();
      });
  }

  private setHeaders(): any {
    const token = localStorage.getItem('user') || '';
    console.log(token);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', JSON.parse(token));
    return { headers };
  }
}
