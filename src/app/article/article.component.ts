import { ArticleService } from './../services/article.service';
import { FormControl } from '@angular/forms';
import { CommentService } from './../services/comment.service';
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
  isLiked!: boolean;

  constructor(
    public img: ImgDivService,
    private http: HttpClient,
    public auth: AuthService,
    private commentServices: CommentService,
    private as: ArticleService
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
        this.article = res;
        this.isLiked = this.as.AleradyLikeIt(this.article.likes);
        this.getTags(this.article);
      });

    // tslint:disable-next-line:align
    // this.as.AleradyLikeIt();
  }

  divImageShow(img: string): void {
    if (img === '') {
      this.showDiv = !this.showDiv;
    }
  }

  getTags(data: any): void {
    this.tags = data.tages;
  }

  addComment(data: HTMLTextAreaElement): void {
    const content = { content: data.value };
    this.commentServices.addComment(this.article._id, content);
  }

  like(): void {
    // this.as.
  }
}
