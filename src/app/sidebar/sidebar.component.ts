import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InboxType } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public inboxTypes: string[];

  @Output()
  public inboxTypeSelected: EventEmitter<number>
    = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.inboxTypes = [
      'inbox',
      'drafts',
      'sent',
      'all mail'
    ];
  }

  selectInboxType(index: InboxType) {
    this.inboxTypeSelected.emit(index);
  }
}
