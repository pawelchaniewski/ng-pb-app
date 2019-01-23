import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild
} from "@angular/core";
import { InboxType } from "../inbox-type.enum";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EmailService } from "../email";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public inboxTypes: Array<string>;
  public title: string;

  // InboxTypeSelected
  @Output()
  myClick: EventEmitter<InboxType> = new EventEmitter<InboxType>();

  @ViewChild("content")
  content: ElementRef;

  constructor(
    private modalService: NgbModal,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.inboxTypes = ["inbox", "drafts", "sent", "all mail"];
  }

  public newEmailEvent(title: string) {
    console.log("new message", title);

    this.title = title;
    this.modalService.open(this.content, { size: "lg" });
  }

  public sendMessage(modal) {
    this.emailService.sentEmail(this.title, "content");
    console.log("message sent");
    modal.close();
  }

  // wybor skrzynki
  selectInboxType(index: number) {
    const inboxType = <InboxType>index;
    console.log("select:", index, InboxType[index]);
    this.myClick.emit(inboxType);

    /*
    switch (inboxType) {
      case InboxType.Inbox:
        break;
      case InboxType.Drafts:
        break;
      case InboxType.Sent:
        break;
      case InboxType.AllMail:
        break;
    } */

    /* js
    switch (index) {
      case 0:
        break;
      case 1:
        break;
    } */
  }
}
