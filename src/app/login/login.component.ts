import { CustomeValidators } from './../common/custom.validators';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss'],
})
export class LoginComponent implements OnInit {
  data: Date = new Date();
  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      CustomeValidators.checkSpaceInput,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(8),
      CustomeValidators.checkSpaceInput,
    ]),
  });

  flag = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }

  get Userame(): any {
    return this.form.get('username');
  }

  get Password(): any {
    return this.form.get('password');
  }

  login(name: HTMLInputElement, password: HTMLInputElement): void {
    const user = { username: name.value, password: password.value };

    this.auth.login(user).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (err: any) => {
        this.form.setErrors(err);
      }
    );
  }
}
