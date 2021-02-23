import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
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
  @Input('followers') followers: any[] = [];
  @Input('auther') autherID: any;
  @Output('change') change = new EventEmitter();

  button!: string;

  flag!: boolean;
  constructor(
    public img: ImgDivService,
    private userServices: UserService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.auth.getCurrentUser();
    this.checkIfFollow(user);
  }

  checkIfFollow(uid: any): void {
    this.flag = this.followers.includes(JSON.parse(uid));
  }

  onFollowClicked(): void {
    this.flag = !this.flag; // change flag
    this.userServices.followAuther(this.autherID).subscribe(
      () => {
        this.change.emit();
      },
      () => {
        this.flag = !this.flag; // rollback
      }
    );
  }

  navigateToProfile() {}
}
