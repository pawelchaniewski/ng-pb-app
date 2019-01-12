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

  public selectedType(index: number) {
    this.parentInboxType = index;
    console.log('wybor skrzynki:', index, InboxType[index]);
  }
}
