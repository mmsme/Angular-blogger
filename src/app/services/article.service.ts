import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

  // check if user Already Like it
  AleradyLikeIt(likes: any[]): boolean {
    const uid = JSON.parse(localStorage.getItem('uid') || '');
    const exist = likes.includes(uid);
    console.log(exist);
    return exist ? true : false;
  }

  // get Article By ID
  getArticleById(id: any): any {
    return this.http.get(
      'https://mmustafablog.herokuapp.com/article/' + id,
      this.setHeaders()
    );
  }

  // like Or Unlike The Article
  likeArticle(postId: string): any {
    return this.http
      .post(this.url + '/like/' + postId, '', this.setHeaders())
      .subscribe((res) => {
        console.log(res);
      });
  }

  private setHeaders(): any {
    const token = localStorage.getItem('user') || '';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', JSON.parse(token));
    return { headers };
  }
}
