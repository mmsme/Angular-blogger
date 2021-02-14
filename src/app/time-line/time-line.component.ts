import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private articleServices: ArticleService, private route: Router) {}

  ngOnInit(): void {
    this.articleServices.getAllArticle().subscribe((data: any) => {
      this.arr = data.reverse();
      this.isComplete = true;
    });
  }

  ShowSelected(id: any): void {
    // tslint:disable-next-line:object-literal-key-quotes
    this.route.navigate(['/home', { outlets: { route1: ['article', id] } }]);
  }
}
