import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
