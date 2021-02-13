import { ImgDivService } from './../services/img-div.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('image') img = '';
  // tslint:disable-next-line:no-input-rename
  @Input('name') name = '';
  showDiv = false;

  constructor(public imgServices: ImgDivService) {}

  ngOnInit(): void {
    this.divImageShow();
  }

  divImageShow(): void {
    if (this.img === '') {
      this.showDiv = !this.showDiv;
    }
  }
}
