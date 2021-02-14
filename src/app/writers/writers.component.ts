import { ImgDivService } from './../services/img-div.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css'],
})
export class WritersComponent implements OnInit {
  usersArr: any = [];
  constructor(public userServices: UserService, public img: ImgDivService) {}

  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe((users: any) => {
      this.usersArr = users;
    });
  }
}
