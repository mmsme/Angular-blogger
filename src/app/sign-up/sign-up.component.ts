import { CustomeValidators } from './../common/custom.validators';
import { AuthService } from './../services/auth.service';
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
      Validators.pattern('[a-zA-Z]*'),
      CustomeValidators.checkSpaceInput,
    ]),
    lname: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
      CustomeValidators.checkSpaceInput,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(100),
      Validators.required,
      CustomeValidators.checkSpaceInput,
    ]),
    address: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
  });

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

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
  get Address(): any {
    return this.form.get('address');
  }

  createNewUser(
    fname: HTMLInputElement,
    lname: HTMLInputElement,
    username: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    address: HTMLInputElement,
    dob: HTMLInputElement
  ): void {
    const user = {
      fname: fname.value.toLocaleLowerCase(),
      lname: lname.value.toLocaleLowerCase(),
      username: username.value.toLocaleLowerCase(),
      email: email.value,
      password: password.value,
      address: address.value,
      dob: dob.value,
    };

    this.auth.signUp(user);
  }
}
