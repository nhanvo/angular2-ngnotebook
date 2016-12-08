/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MynoteComponent } from './mynote.component';

describe('MynoteComponent', () => {
  let component: MynoteComponent;
  let fixture: ComponentFixture<MynoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
