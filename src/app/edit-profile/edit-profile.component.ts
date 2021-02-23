import { UserService } from './../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomeValidators } from '../common/custom.validators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  User: any;

  form = new FormGroup({
    fname: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z]*'),
      CustomeValidators.checkSpaceInput,
    ]),
    lname: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z]*'),
      CustomeValidators.checkSpaceInput,
    ]),
    username: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(100),
      CustomeValidators.checkSpaceInput,
    ]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(100),
      CustomeValidators.checkSpaceInput,
    ]),
  });

  constructor(
    private userServices: UserService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((url) => {
      const id = url.id;
      this.userServices.getUserById(id).subscribe((user: any) => {
        this.User = user;
        console.log(this.User);
      });
    });
  }

  get Fname(): any {
    return this.form.get('fname');
  }
  get Lname(): any {
    return this.form.get('lname');
  }
  get Username(): any {
    return this.form.get('username');
  }
  get Email(): any {
    return this.form.get('email');
  }
  get Password(): any {
    return this.form.get('password');
  }

  updateUser(
    fname: HTMLInputElement,
    lname: HTMLInputElement,
    username: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement
  ) {
    let data: any = {
      fname: fname.value || this.User.fname,
      lname: lname.value || this.User.lanem,
      username: username.value || this.User.username,
      email: email.value || this.User.email,
    };

    if (password.value != '') {
      data.password = password.value;
    }

    this.userServices.updateUser(data).subscribe(() => {
      this.router.navigate(['/home', { outlets: { route1: 'profile' } }]);
    });
  }

  navigateToProfile() {
    this.router.navigate(['/home', { outlets: { route1: 'profile' } }]);
  }
}
