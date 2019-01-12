import { Component, OnInit, Input } from '@angular/core';
import { InboxType } from '../app.component';

@Component({
  selector: 'app-mail-content',
  templateUrl: './mail-content.component.html',
  styleUrls: ['./mail-content.component.css']
})
export class MailContentComponent implements OnInit {
  @Input()
  public childInboxType: InboxType;

  @Input()
  public number: number;

  public InboxType = InboxType;

  constructor() { }

  ngOnInit() {
    console.log(this.number);
  }

}
