/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityDescComponent } from './city-desc.component';

describe('CityDescComponent', () => {
  let component: CityDescComponent;
  let fixture: ComponentFixture<CityDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
