import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-tags',
  templateUrl: './post-tags.component.html',
  styleUrls: ['./post-tags.component.css'],
})
export class PostTagsComponent implements OnInit {
  articles!: any[];
  tag!: string;
  isLoading = true;

  constructor(
    private ar: ActivatedRoute,
    private articlServices: ArticleService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((url) => {
      this.tag = url.tag;
      this.articlServices.getArticleByTag(this.tag).subscribe((res: any) => {
        this.articles = res;
        this.isLoading = false;
      });
    });
  }

  ShowSelected(id: any): void {
    // tslint:disable-next-line:object-literal-key-quotes
    this.route.navigate(['/home', { outlets: { route1: ['article', id] } }]);
  }
}
