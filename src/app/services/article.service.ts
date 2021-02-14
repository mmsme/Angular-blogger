import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private url = 'https://mmustafablog.herokuapp.com/article';

  constructor(private http: HttpClient, private route: Router) {}

  // get All Article By ID
  getAllArticle(): any {
    return this.http.get<any>(this.url);
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
    return this.http.get(this.url + '/' + id, this.setHeaders());
  }

  // like Or Unlike The Article
  likeArticle(postId: string): any {
    return this.http
      .post(this.url + '/like/' + postId, '', this.setHeaders())
      .subscribe((res) => {
        console.log(res);
      });
  }

  // create New Article
  createNewArticle(article: FormData): any {
    console.log('From fun');

    return this.http
      .post(this.url + '/create', article, this.setHeaders())
      .subscribe(
        (res: any) => {
          console.log(res);
          this.route.navigate([
            '/home',
            { outlets: { route1: ['article', res._id] } },
          ]);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // get Post Auther
  getArticleByAuther(username: any): any {
    return this.http.get(this.url + '/author/' + username, this.setHeaders());
  }

  // delete Artice By Id
  deleteArticle(id: any): any {
    return this.http
      .delete(this.url + '/' + id, this.setHeaders())
      .subscribe(() => {
        window.location.reload();
      });
  }

  private setHeaders(): any {
    const token = localStorage.getItem('user') || '';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', JSON.parse(token));
    return { headers };
  }
}
