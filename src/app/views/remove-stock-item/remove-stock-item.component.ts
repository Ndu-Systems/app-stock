import { CategoryService } from "./../../services/category.service";
import { Component, OnInit } from "@angular/core";
import { StockItem } from "src/app/models/stock.model";

@Component({
  selector: "app-remove-stock-item",
  templateUrl: "./remove-stock-item.component.html",
  styleUrls: ["./remove-stock-item.component.scss"]
})
export class RemoveStockItemComponent implements OnInit {
  heading = "STOCK OUT";
  barcode: any;
  showScann: boolean;
  stockItems: Array<StockItem> = [];
  selectedItem: StockItem;
  constructor(private categoryService: CategoryService) {}
  closeScanner(barcode) {
    this.barcode = barcode;
    this.showScann = false;

    if (this.barcode) {
      this.searchByBarcode();
    }
  }
  scann() {
    this.showScann = true;
  }
  searchByBarcode() {
    let search: any[] = this.stockItems.filter(x => x.barcode === this.barcode);
    if (search.length === 1) {
      this.selectedItem = search[0];
      console.log(this.selectedItem);
    }
  }
  ngOnInit() {
    this.categoryService.getStockItems().subscribe(r => {
      this.stockItems = r.stock_items;
      console.log(this.stockItems);
    });
  }
}
