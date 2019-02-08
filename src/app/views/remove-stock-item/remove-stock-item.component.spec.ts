/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RemoveStockItemComponent } from './remove-stock-item.component';

describe('RemoveStockItemComponent', () => {
  let component: RemoveStockItemComponent;
  let fixture: ComponentFixture<RemoveStockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveStockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
