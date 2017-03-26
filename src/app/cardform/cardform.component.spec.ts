/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardformComponent } from './cardform.component';

describe('CardformComponent', () => {
  let component: CardformComponent;
  let fixture: ComponentFixture<CardformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
