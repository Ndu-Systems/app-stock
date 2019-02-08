/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagesHearderComponent } from './pages-hearder.component';

describe('PagesHearderComponent', () => {
  let component: PagesHearderComponent;
  let fixture: ComponentFixture<PagesHearderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesHearderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesHearderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
