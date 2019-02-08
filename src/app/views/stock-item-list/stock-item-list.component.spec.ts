/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockItemListComponent } from './stock-item-list.component';

describe('StockItemListComponent', () => {
  let component: StockItemListComponent;
  let fixture: ComponentFixture<StockItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
