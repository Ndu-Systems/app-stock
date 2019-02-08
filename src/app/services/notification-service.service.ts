import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  addPushSubscriber(sub: PushSubscription): any {
    alert(JSON.stringify(sub));
    localStorage.setItem("SUBSCRIPTION_OBJECT", JSON.stringify(sub));
  }

constructor() { }


}


