import { ArticleService } from './../services/article.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
