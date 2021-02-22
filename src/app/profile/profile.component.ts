import { Router } from '@angular/router';
import { ArticleService } from './../services/article.service';
import { UserService } from './../services/user.service';
import { ImgDivService } from './../services/img-div.service';
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
  following: any = [];
  showFlag: number = 3;

  constructor(
    public img: ImgDivService,
    private userServices: UserService,
    private article: ArticleService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.userServices.getProfileInf().subscribe((user: any) => {
      this.User = user;

      // get Following
      this.userServices.getFollowing().subscribe((arg: any) => {
        this.following = arg;
        console.log(this.following);
      });

      this.article
        .getArticleByAuther(this.User.username)
        .subscribe((data: any) => {
          this.UserArticles = data.reverse();
          this.isComplete = true;
        });
    });
  }

  deleteArticle(item: any): void {
    this.article.deleteArticle(item);
  }

  editArticle(id: any): void {
    alert(id);
    this.route.navigate(['/home', { outlets: { route1: ['edit', id] } }]);
  }

  ShowSelected(id: any): void {
    // tslint:disable-next-line:object-literal-key-quotes
    this.route.navigate(['/home', { outlets: { route1: ['article', id] } }]);
  }

  loadFollowingChange() {
    this.userServices.getFollowing().subscribe((data: any) => {
      this.following = data;
    });
  }
}
