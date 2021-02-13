import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css'],
})
export class TimeLineComponent implements OnInit {
  arr: any = [];
  number = new Array(9);
  isComplete = false;
  p: any;

  constructor(private articleServices: ArticleService) {}

  ngOnInit(): void {
    this.articleServices.getAllArticle().subscribe((data: any) => {
      this.arr = data.reverse();
      this.isComplete = true;
    });
  }

  ShowSelected(e: any): void {
    console.log('Welcome');
    console.log(e);
  }
}
