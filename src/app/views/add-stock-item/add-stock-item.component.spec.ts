/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddStockItemComponent } from './add-stock-item.component';

describe('AddStockItemComponent', () => {
  let component: AddStockItemComponent;
  let fixture: ComponentFixture<AddStockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
