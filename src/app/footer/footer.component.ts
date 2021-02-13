import { ArticleService } from './../services/article.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  articles: any[] = [];
  tags: any[] = [];
  recent: any[] = [];

  constructor(private articleServices: ArticleService) {}

  ngOnInit(): void {
    this.articleServices.getAllArticle().subscribe((data: any) => {
      this.articles = data.reverse();
      this.getRecent(this.articles);
      this.getRecentTags(this.articles);
    });
  }

  getRecent(data: any[]): void {
    const last5 = data.slice(0, 5);

    for (const item of last5) {
      this.recent.push(item.title);
    }
  }

  getRecentTags(data: any): void {
    // tslint:disable-next-line:prefer-const
    for (let item of data) {
      this.addTag(item.tages);
    }
  }

  addTag(tag: any): void {
    // console.log(tag);
    // tslint:disable-next-line:prefer-const
    for (let item of tag) {
      // tslint:disable-next-line:prefer-const
      let x = this.tags.includes(item);

      if (x) {
        continue;
      }
      this.tags.push(item);
    }
  }
}
