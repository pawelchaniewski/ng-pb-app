import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InboxEmailMessage, EmailService } from 'src/email';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {
  inboxMessages: InboxEmailMessage[] = []
  selectedEmail: InboxEmailMessage

  constructor(
    private emailService: EmailService
  ) { }

  public toggleAccordian( props:NgbPanelChangeEvent ): void{
    this.selectedEmail = this.inboxMessages[props.panelId]    
    console.log(props.panelId)
 }
 
  ngOnInit() {
    this.inboxMessages = [
      <InboxEmailMessage>{
       title: 'tytul 1',
       content: 'tresc  1'
     },
     new InboxEmailMessage('tytul 2', 'tresc  2'),
     new InboxEmailMessage('tytul 3', 'tresc  3')
    ],
    this.selectedEmail = this.inboxMessages[0]
  }
}
