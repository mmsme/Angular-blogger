import { ImgDivService } from './../services/img-div.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-porfile-post',
  templateUrl: './porfile-post.component.html',
  styleUrls: ['./porfile-post.component.css'],
})
export class PorfilePostComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('img') imgSrc!: string;
  // tslint:disable-next-line:no-input-rename
  @Input('name') name!: string;
  // tslint:disable-next-line:no-input-rename
  @Input('profileImg') profileImg = '';
  // tslint:disable-next-line:no-output-rename

  // tslint:disable-next-line:no-output-rename
  @Output('edit') edit = new EventEmitter();

  // tslint:disable-next-line:no-output-rename
  @Output('delete') delete = new EventEmitter();

  constructor(public img: ImgDivService) {}

  ngOnInit(): void {}

  onEditClicked(): void {
    this.edit.emit();
  }

  onDeleteClicked(): void {
    this.delete.emit();
  }
}
