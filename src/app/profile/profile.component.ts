import { ArticleService } from './../services/article.service';
import { UserService } from './../services/user.service';
import { ImgDivService } from './../services/img-div.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  number = new Array(3);
  isComplete = false;
  User: any;
  UserArticles: any = [];
  following = [];

  constructor(
    public img: ImgDivService,
    private userServices: UserService,
    private article: ArticleService
  ) {}

  ngOnInit(): void {
    this.userServices.getProfileInf().subscribe((user: any) => {
      this.User = user;
      console.log(this.User);

      // get Following
      this.userServices
        .getFollowing()
        .subscribe((arg: any) => (this.following = arg));

      this.article
        .getArticleByAuther(this.User.username)
        .subscribe((data: any) => {
          this.UserArticles = data;
          console.table(this.UserArticles);
          this.isComplete = true;
        });
    });
  }

  deleteArticle(item: any): void {
    this.article.deleteArticle(item);
  }
}
