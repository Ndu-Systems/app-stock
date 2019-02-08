import { DataService } from "./data.service";
import { Component, OnInit } from "@angular/core";
import { SwUpdate, SwPush } from "@angular/service-worker";
import { NotificationServiceService } from "./services/notification-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  joke: any;
  deferredPrompt;
  promptEvent: any;
  readonly VAPID_PUBLIC_KEY =
    "BDD8jtmMxBEYV4dd3hl8I1KqVkc2h1__I8h9-TEKP1mhQHc52y5Klts7FDitXIdi2iWNSYMKO-n_p8v-OzPdkrQ";
  constructor(
    private data: DataService,
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private notificationServiceService: NotificationServiceService
  ) {
    //check for page updates
    swUpdate.available.subscribe(event => {
      if (this.askUserToUpdate()) {
        alert("change");
        window.location.reload();
      }
    });

    // custom install button
    window.addEventListener("beforeinstallprompt", event => {
      this.promptEvent = event;
    });

    //reques push
    // this.subscribeToNotifications();  Later
  }
  ngOnInit(): void {
    this.data.get().subscribe(r => {
      this.joke = r;
    });
  }
  askUserToUpdate() {
    return true;
  }
  installApp() {
    this.promptEvent.prompt();
  }
  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub =>
        this.notificationServiceService.addPushSubscriber(sub).subscribe()
      )
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
