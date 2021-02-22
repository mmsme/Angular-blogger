import { ArticleService } from './../services/article.service';
import { CommentService } from './../services/comment.service';
import { AuthService } from './../services/auth.service';
import { ImgDivService } from './../services/img-div.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  likesCount!: number;

  constructor(
    public img: ImgDivService,
    public auth: AuthService,
    private commentServices: CommentService,
    private articleService: ArticleService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.ar.params.subscribe((url) => {
      let id;
      id = url.id;
      this.articleService.getArticleById(id).subscribe((res: any) => {
        this.article = res;
        console.log(this.article);
        this.isLiked = this.articleService.AleradyLikeIt(this.article.likes);
        this.tags = this.article.tages;
        this.sortComments(this.article.comments);
        this.likesCount = this.article.likes.length;
        console.log(this.article.comments);
      });
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
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
    this.articleService.likeArticle(this.article._id).subscribe(
      () => {},
      () => {
        this.likesCount--;
      }
    );
  }

  sortComments(comments: any[]): void {
    comments?.reverse();
  }
}
