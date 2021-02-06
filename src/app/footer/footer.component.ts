import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  arr = [
    'football',
    'Technology',
    'tennise',
    'music',
    'video',
    'video games',
    'Tahoma',
    'Angular',
    'Bootstrap',
    'Javascript',
    'C#/VB',
    'Java',
    'Flutter',
    'Al Ahly',
    'Mohamed',
  ];

  constructor() {}

  ngOnInit(): void {}
}
