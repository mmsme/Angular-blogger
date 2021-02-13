import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private url = 'https://mmustafablog.herokuapp.com/article';

  constructor(private http: HttpClient) {}

  // get All Article By ID
  getAllArticle(): any {
    return this.http
      .get<any>('https://mmustafablog.herokuapp.com/article')
      .pipe(
        map((data) =>
          data.sort(
            (a: any, b: any): any =>
              new Date(a.createdAt).getTime() - new Date().getTime()
          )
        )
      );
  }

  // get Article By ID
  getArticleById(id: any): object {
    return {};
  }
}
