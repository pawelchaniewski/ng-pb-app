import { Component, OnInit, Input } from '@angular/core';
import { InboxType } from '../inbox-type.enum';

@Component({
  selector: 'app-mail-content',
  templateUrl: './mail-content.component.html',
  styleUrls: ['./mail-content.component.css']
})
export class MailContentComponent implements OnInit {
  @Input()
  public inboxType: InboxType;

  constructor() { }

  ngOnInit() {
  }

}
