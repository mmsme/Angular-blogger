import { ImgDivService } from './../services/img-div.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  arr: any = [];
  constructor(public img: ImgDivService) {}

  ngOnInit(): void {}
}
