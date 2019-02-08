import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-stock-item',
  templateUrl: './remove-stock-item.component.html',
  styleUrls: ['./remove-stock-item.component.scss']
})
export class RemoveStockItemComponent implements OnInit {
  heading ="STOCK OUT";
  constructor() { }

  ngOnInit() {
  }

}
