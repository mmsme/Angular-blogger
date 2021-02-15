import { UserService } from './../services/user.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ImgDivService } from '../services/img-div.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('name') name!: string;
  // tslint:disable-next-line:no-output-rename
  @Output('follow') follow = new EventEmitter();
  button!: string;

  flag!: boolean;
  constructor(public img: ImgDivService, private userServices: UserService) {}

  ngOnInit(): void {

  }

  onFollowClicked(): void {
    this.follow.emit();
  }
}
