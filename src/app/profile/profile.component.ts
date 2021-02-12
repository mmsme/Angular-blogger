import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  arr: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://mmustafablog.herokuapp.com/article')
      .subscribe((res) => {
        this.arr = res;
      });
  }
}
