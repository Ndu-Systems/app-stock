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
  stockItems: Array<any>;
  stockItemsFiltered: Array<any> = [];
  canShowMessage: boolean = false;
  message: string;
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getStockItemNames().subscribe(r => {
      this.stockItems = r.stock_details;
      console.log(r);
    });
  }
  closeScanner(barcode) {
    this.barcode = barcode;
    this.showScann = false;
  }
  scann() {
    this.showScann = true;
  }
  onCategoryChange(event: any) {
    this.itemCategory = event.target.value;
    this.stockItemsFiltered = this.stockItems.filter(
      x => Number(x.categoryId) === Number(this.itemCategory)
    );
    console.log(this.stockItemsFiltered);
  }
  add() {
    let data = {
      stock_detailsId: this.itemId,
      barcode: this.getbarcode(),
      userId: 1
    };
    if (data.stock_detailsId && data.userId) {
      this.categoryService.addStockItem(data).subscribe(r => {
        let message = "";
        if (r === true) {
          message = "Item added successfully";
        } else {
          message = r;
        }
        this.showMessage(message);
      });
    }else{
      this.showMessage("Please select product name");
    }
  }
  getbarcode() {
    if (this.barcode === "00000000000") return "";
    return this.barcode;
  }
  showMessage(msg: string) {
    this.canShowMessage = true;
    this.message = msg;
    setTimeout(()=> {
    this.canShowMessage = false;
     }, 5000);

  }
}
