import { ImgDivService } from './../services/img-div.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
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
  // tslint:disable-next-line:no-output-rename
  @Output('selected') selected = new EventEmitter();

  showDiv = false;

  constructor(public img: ImgDivService) {}

  ngOnInit(): void {
    this.divImageShow();
  }

  divImageShow(): void {
    if (this.profileImg === '') {
      this.showDiv = !this.showDiv;
    }
  }

  raiseEvent(): void {
    this.selected.emit();
  }
}
