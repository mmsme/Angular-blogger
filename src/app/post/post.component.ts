import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('img') imgSrc!: string;
  // tslint:disable-next-line:no-input-rename
  @Input('name') name!: string;
  // tslint:disable-next-line:no-input-rename
  @Input('profileImg') profileImg = '';

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

  ngOnInit(): void {
    this.divImageShow();
  }

  genrateName(): string {
    return this.name?.charAt(0).toUpperCase();
  }

  divImageShow(): void {
    if (this.profileImg === '') {
      this.showDiv = !this.showDiv;
    }
  }

  chooseColor(): string {
    return this.colors[Math.floor(Math.random() * 10)];
  }
}
