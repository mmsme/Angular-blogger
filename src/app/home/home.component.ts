import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arr: any = [];
  number = new Array(9);
  isComplete = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://mmustafablog.herokuapp.com/article')
      .pipe(
        map((data) =>
          data.sort(
            (a: any, b: any): any =>
              new Date(a.createdAt).getTime() - new Date().getTime()
          )
        )
      )
      .subscribe((res) => {
        this.isComplete = true;
        console.log(res);
        this.arr = res;
      });
  }
}
