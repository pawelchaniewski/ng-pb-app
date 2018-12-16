import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { InboxType } from './inbox-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public inboxType: InboxType = InboxType.Inbox;

  @ViewChild('content')
  content: ElementRef;

  constructor(private modalService: NgbModal) { }

  public inboxTypeSelected(event: InboxType) {
    this.inboxType = event;
  }

  public newEmailEvent(title: string) {
    console.log('new message', title);

    this.title = title;
    this.modalService.open(this.content, { size: 'lg' });
  }
}
