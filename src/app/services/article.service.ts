import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  AleradyLikeIt(likes: any[]): boolean {
    const uid = JSON.parse(localStorage.getItem('uid') || '');
    const exist = likes.includes(uid);
    console.log(exist);
    return exist ? true : false;
  }

  // get Article By ID
  getArticleById(id: any): any {}

  likeArticle(postId: string): void {}

  unlikeArticle(postId: string): void {}
}
