import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss'],
})
export class LoginComponent implements OnInit {
  data: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }
}
