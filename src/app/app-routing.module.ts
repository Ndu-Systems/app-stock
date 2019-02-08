import { ScannerComponent } from './views/scanner/scanner.component';
import { StockItemListComponent } from "./views/stock-item-list/stock-item-list.component";
import { RemoveStockItemComponent } from "./views/remove-stock-item/remove-stock-item.component";
import { PagesHearderComponent } from "./shared/views/pages-hearder/pages-hearder.component";
import { AddStockItemComponent } from "./views/add-stock-item/add-stock-item.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./views/home-page/home-page.component";
import { StockOutReasonComponent } from './stock-out-reason/stock-out-reason.component';

export const declarations = [
  HomePageComponent,
  AddStockItemComponent,
  PagesHearderComponent,
  RemoveStockItemComponent,
  StockItemListComponent,
  ScannerComponent, StockOutReasonComponent
];
const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "add-stock-item", component: AddStockItemComponent },
  { path: "remove-stock-item", component: RemoveStockItemComponent },
  { path: "stock-item-list", component: StockItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
