import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule, declarations } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ...declarations],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
