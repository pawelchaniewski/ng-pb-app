import { Component, OnInit } from '@angular/core';
import { InboxEmailMessage, EmailService } from 'src/email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = [];

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService
      .getMessages()
      .then(result => (this.inboxMessages = result));
  }

}
