/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PorfilePostComponent } from './porfile-post.component';

describe('PorfilePostComponent', () => {
  let component: PorfilePostComponent;
  let fixture: ComponentFixture<PorfilePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfilePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfilePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
