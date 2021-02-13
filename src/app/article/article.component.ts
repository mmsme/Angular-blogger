import { ArticleService } from './../services/article.service';
import { CommentService } from './../services/comment.service';
import { AuthService } from './../services/auth.service';
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
    public auth: AuthService,
    private commentServices: CommentService,
    private as: ArticleService
  ) {}

  ngOnInit(): void {
    this.as.getArticleById('601da5bb2566450015900ec2').subscribe((res: any) => {
      this.article = res;
      console.log(this.article);
      this.isLiked = this.as.AleradyLikeIt(this.article.likes);
      this.tags = this.article.tages;
      this.sortComments(this.article.comments);
    });
  }

  divImageShow(img: string): void {
    if (img === '') {
      this.showDiv = !this.showDiv;
    }
  }

  addComment(data: HTMLTextAreaElement): void {
    const content = { content: data.value };
    this.commentServices
      .addComment(this.article._id, content)
      .subscribe((res: any) => {
        this.article = res;
        this.sortComments(this.article.comments);
      });
  }

  like(): void {
    this.as.likeArticle(this.article._id);
    this.isLiked = !this.isLiked;
  }

  sortComments(comments: any[]): void {
    comments.sort(
      (a: any, b: any): any =>
        new Date(a.createdAt).getTime() - new Date().getTime()
    );
  }
}
