import { CommentService } from './../services/comment.service';
import { AuthService } from './../services/auth.service';
import { ImgDivService } from './../services/img-div.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Input('autherId') autherId = '';
  @Input('commentId') commentId!: string;
  @Output('change') change = new EventEmitter();
  @Output('delete') delete = new EventEmitter();

  loggedUserId!: any;
  operationFlag = false;
  editableFlag = false;

  showDiv = false;

  constructor(
    public imgServices: ImgDivService,
    private auth: AuthService,
    private comment: CommentService
  ) {}

  ngOnInit(): void {
    this.divImageShow();
    this.loggedUserId = JSON.parse(this.auth.getCurrentUser());
    this.openCommnetOperation();
  }

  divImageShow(): void {
    if (this.img === '') {
      this.showDiv = !this.showDiv;
    }
  }

  openCommnetOperation() {
    this.operationFlag = this.autherId == this.loggedUserId ? true : false;
  }

  editComment(data: any) {
    const comment = { content: data };
    this.comment.editComment(this.commentId, comment).subscribe(() => {
      this.change.emit();
    });
  }

  deleteComment() {
    this.delete.emit(this.commentId);
    this.comment.deleteComment(this.commentId).subscribe(() => {});
  }
}
