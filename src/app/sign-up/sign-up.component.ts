import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css', './sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  data = new Date();
  // form Costorls and groups
  form = new FormGroup({
    fname: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required,
      Validators.pattern('[A-Z][a-zA-Z]*'),
    ]),
    lname: new FormControl('', [
      Validators.maxLength(3),
      Validators.minLength(30),
      Validators.pattern('[A-Z][a-zA-Z]*'),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(10),
    ]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(100),
      Validators.required,
    ]),
    address: new FormControl('', [Validators.pattern('^d+s[A-z]+s[A-z]+$')]),
  });

  constructor() {}

  ngOnInit(): void {}

  get Fname(): any {
    return this.form.get('fname');
  }
  get Lname(): any {
    return this.form.get('Lname');
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
  get Address(): any {
    return this.form.get('address');
  }
}
