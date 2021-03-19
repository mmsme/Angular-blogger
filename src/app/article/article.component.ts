import { ArticleService } from './../services/article.service';
import { CommentService } from './../services/comment.service';
import { AuthService } from './../services/auth.service';
import { ImgDivService } from './../services/img-div.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throttleTime } from 'rxjs/operators';

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
  id!: any;
  isLoading = true;

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
      this.id = url.id;
      this.articleService.getArticleById(this.id).subscribe((res: any) => {
        this.article = res;
        this.isLiked = this.articleService.AleradyLikeIt(this.article.likes);
        this.tags = this.article.tages;
        this.sortComments(this.article.comments);
        this.likesCount = this.article.likes.length;
        this.isLoading = false;
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
    // press like button
    // 1 change style to show effect
    this.isLiked = !this.isLiked;
    // 2 change value
    this.likesCount += this.isLiked ? 1 : -1;
    // 3 like Backend
    this.articleService.likeArticle(this.article._id).subscribe(
      () => {},
      () => {
        // roleback
        this.likesCount--;
      }
    );
  }

  sortComments(comments: any[]): void {
    comments?.reverse();
  }

  loadData(): void {
    this.articleService.getArticleById(this.id).subscribe((res: any) => {
      this.article = res;
      this.isLiked = this.articleService.AleradyLikeIt(this.article.likes);
      this.tags = this.article.tages;
      this.sortComments(this.article.comments);
      this.likesCount = this.article.likes.length;
    });
  }

  removeDeletedComment(id: any) {
    const index = this.article.comments.findIndex((e: any) => {
      return e._id == id;
    });

    this.article.comments.splice(index, 1);
  }
}
