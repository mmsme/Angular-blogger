import { ImgDivService } from './../services/img-div.service';
import { ArticleService } from './../services/article.service';
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  User: any;
  UserArticles: any = [];
  following: any = [];
  showFlag: number = 3;

  constructor(
    public img: ImgDivService,
    private ar: ActivatedRoute,
    private userService: UserService,
    private article: ArticleService,
    private route: Router
  ) {}

  ngOnInit() {
    this.ar.params.subscribe((url) => {
      let id = url.id;
      this.userService.getUserById(id).subscribe((user: any) => {
        this.User = user;
        console.log(this.User);
      });

      this.userService.getFollowing().subscribe((arg: any) => {
        this.following = arg;
        console.table(this.following);
      });

      this.article
        .getArticleByAuther(this.User.username)
        .subscribe((data: any) => {
          this.UserArticles = data.reverse();
          console.table(this.UserArticles);
        });
    });
  }

  ShowSelected(id: any): void {
    // tslint:disable-next-line:object-literal-key-quotes
    this.route.navigate(['/home', { outlets: { route1: ['article', id] } }]);
  }
}
