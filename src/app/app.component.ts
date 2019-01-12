import { Component } from '@angular/core';

export enum InboxType {
  Inbox = 0,
  Drafts = 1,
  Sent = 2,
  AllMail = 3
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentInboxType: InboxType = InboxType.Inbox;

  public selectedType(index: InboxType) {
    console.log(index, InboxType[index]);
    this.parentInboxType = index;
  }
}
