import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
      .subscribe((res) => {
        this.isComplete = true;
        this.arr = res;
      });
  }
}
