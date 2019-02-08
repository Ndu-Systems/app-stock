import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: "app-add-stock-item",
  templateUrl: "./add-stock-item.component.html",
  styleUrls: ["./add-stock-item.component.scss"]
})
export class AddStockItemComponent implements OnInit {
  heading = "ADD NEW ITEM";
  showScann: boolean = false;
  barcode: string = "00000000000";
  itemCategory;
  itemId;
  categories$: Observable<Array<any>> = this.categoryService.getCatagories();
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {}
  closeScanner(barcode) {
    this.barcode = barcode;
    this.showScann = false;
  }
  scann() {
    this.showScann = true;
  }

  add() {
    let data = {
      stock_detailsId: this.itemId,
      barcode: this.barcode,
      userId: 1
    };
    console.log(JSON.stringify(this.itemCategory));
  }
}
