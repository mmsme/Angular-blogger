import { AuthService } from './../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImgDivService } from './../services/img-div.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  showDiv = false;
  article: any;
  tags = [];

  constructor(
    public img: ImgDivService,
    private http: HttpClient,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1vaGFtZWQxMiIsImVtYWlsIjoiYWxhYUBnbWFpbC5jb20iLCJpZCI6IjYwMjZmOTVjNjQ4NjM1MDAxNTkxNTRiNiIsImlhdCI6MTYxMzE3NzU5NiwiZXhwIjoxNjEzMjYzOTk2fQ.zaxpP2fWvxDISgI3maLS0ZXak8d9sDdVWkYRRZTLAII`
    ); // may be localStorage/sessionStorage
    const headers = { headers: header };
    this.http
      .get(
        'https://mmustafablog.herokuapp.com/article/6027186064863500159154bc',
        headers
      )
      .subscribe((res: any) => {
        this.article = res[0];
        this.getTags(this.article);
      });
  }

  divImageShow(img: string): void {
    if (img === '') {
      this.showDiv = !this.showDiv;
    }
  }

  getTags(data: any): void {
    this.tags = data.tages;
    console.log(this.tags);
  }
}
