import { Component } from '@angular/core';
import { InboxType } from './inbox-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inboxType: InboxType = InboxType.AllMail;

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }

  public newEmailEvent(message: string) {
    console.log('new message', message);
  }
}
