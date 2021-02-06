import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blogger';
  arr: any = [];
  constructor(private http: HttpClient) {
    http
      .get<any>('https://mmustafablog.herokuapp.com/article')
      .subscribe((res) => {
        this.arr = res;
      });
  }
}
