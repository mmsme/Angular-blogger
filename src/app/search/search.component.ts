import { AuthService } from './../services/auth.service';
import { ImgDivService } from './../services/img-div.service';
import { Router } from '@angular/router';
import { ArticleService } from './../services/article.service';
import { UserService } from './../services/user.service';
import { CustomeValidators } from './../common/custom.validators';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  users: any = [];
  articles: any = [];
  currentUserID!: string;
  searchBar = new FormControl('', [
    Validators.required,
    CustomeValidators.checkSpaceInput,
  ]);

  constructor(
    public img: ImgDivService,
    private articleServces: ArticleService,
    private route: Router,
    private userServices: UserService,
    private authServices: AuthService
  ) {}

  ngOnInit(): void {}

  ShowSelected(id: any): void {
    // tslint:disable-next-line:object-literal-key-quotes
    this.route.navigate(['/home', { outlets: { route1: ['article', id] } }]);
  }

  search(key: HTMLInputElement): void {
    this.userServices.getUserByName(key.value).subscribe((res: any) => {
      this.users = res;
      this.removeLoggedUserFromResult();
    });

    this.articleServces.getArticleByTitle(key.value).subscribe((res: any) => {
      this.articles = res;
    });
  }

  removeLoggedUserFromResult(): void {
    const index = this.users.findIndex(
      (e: any) => e._id == JSON.parse(this.authServices.getCurrentUser())
    );

    if (index != -1) {
      this.users.splice(index, 1);
    }
  }
}
