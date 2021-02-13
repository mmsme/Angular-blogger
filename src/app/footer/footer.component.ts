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

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    await this.http
      .get<any>('https://mmustafablog.herokuapp.com/article')
      .pipe(
        map((data: any) =>
          data.sort(
            (a: any, b: any): any =>
              new Date(a.createdAt).getTime() - new Date().getTime()
          )
        )
      )
      .subscribe((res) => {
        this.articles = res;
        this.getRecentTags(this.articles);
        this.getRecent(this.articles);
        console.log(this.tags);
      });
  }

  getRecent(data: any[]): void {
    const last5 = data.splice(0, 5);

    for (const item of last5) {
      this.recent.push(item.title);
    }
  }

  getRecentTags(data: any): void {
    const tags: string | any[] = [];

    // tslint:disable-next-line:prefer-const
    for (let item of data) {
      // console.log(Array.isArray(item.tages));
      // if (Array.isArray(item.tages)) {
      //   // tslint:disable-next-line:prefer-const
      //   for (let i of item.tages) {
      //     console.log(i);

      //     this.addTag(i);
      //     continue;
      //   }
      // }

      // console.log(item);
      // tslint:disable-next-line:curly

      this.addTag(item.tages);
    }
    console.table(tags);
  }

  addTag(tag: any): void {
    for (const item of tag) {
      // tslint:disable-next-line:prefer-const
      let x = this.tags.includes(item);
      if (x) {
        continue;
      }

      this.tags.push(item);
    }
    // const i = this.tags.indexOf();
    // console.log(i);
    // console.log(...tag);
    // if (i === -1) {
    // }
  }
}
