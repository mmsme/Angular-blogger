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
      this.articles = data;
      console.log(this.articles);

      this.getRecent(data);
      this.getRecentTags(data);
    });
  }

  getRecent(data: any[]): void {
    const last5 = data.splice(0, 5);

    for (const item of last5) {
      this.recent.push(item.title);
    }
  }

  getRecentTags(data: any): void {
    for (const item of data) {
      this.addTag(item.tages);
    }
  }

  addTag(tag: any): void {
    console.log(tag);
    for (const item of tag) {
      // tslint:disable-next-line:prefer-const
      let x = this.tags.includes(item);
      if (x) {
        continue;
      }
      this.tags.push(item);
    }
  }
}
