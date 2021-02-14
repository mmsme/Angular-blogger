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
  searchBar = new FormControl('', [
    Validators.required,
    CustomeValidators.checkSpaceInput,
  ]);

  constructor(
    private user: UserService,
    private articleServces: ArticleService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  searchByName(name: HTMLInputElement): any {
    this.user.searchByUsername(name.value).subscribe((res: any) => {
      this.user = res;
      console.log(res);
    });

    name.value = '';
  }

  searchOnArticle(input: HTMLInputElement): any {
    this.articleServces.getArticleByTitle(input.value).subscribe((res: any) => {
      this.articles = res;
      console.log(this.articles);
    });
  }

  ShowSelected(id: any): void {
    // tslint:disable-next-line:object-literal-key-quotes
    this.route.navigate(['/home', { outlets: { route1: ['article', id] } }]);
  }
}
