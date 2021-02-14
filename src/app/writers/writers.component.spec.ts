/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WritersComponent } from './writers.component';

describe('WritersComponent', () => {
  let component: WritersComponent;
  let fixture: ComponentFixture<WritersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
