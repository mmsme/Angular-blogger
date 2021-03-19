import { AuthService } from './../services/auth.service';
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
  currentUserId!: any;
  isLoading = true;

  constructor(
    public userServices: UserService,
    public img: ImgDivService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe((users: any) => {
      this.usersArr = users;
      const index = this.usersArr.findIndex(
        (e: any) => e._id == JSON.parse(this.auth.getCurrentUser())
      );

      this.usersArr.splice(index, 1);
      this.isLoading = false;
    });
  }
}
