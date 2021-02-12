import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  showDiv = false;
  colors = [
    '#16c79a',
    '#008891',
    '#cf1b1b',
    '#272343',
    '#222831',
    '#d2e603',
    '#ffd700',
    '#fd7014',
    '#204051',
    '#007965',
  ];

  constructor() {}

  ngOnInit(): void {}

  genrateChar(name: string): string {
    return name.charAt(0).toUpperCase();
  }

  divImageShow(img: string): void {
    if (img === '') {
      this.showDiv = !this.showDiv;
    }
  }

  chooseColor(): string {
    return this.colors[Math.floor(Math.random() * 10)];
  }
}
