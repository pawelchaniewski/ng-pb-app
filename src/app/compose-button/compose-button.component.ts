import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild
} from "@angular/core";
import { EmailService } from "../email";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-compose-button",
  templateUrl: "./compose-button.component.html",
  styleUrls: ["./compose-button.component.scss"]
})
export class ComposeButtonComponent implements OnInit {
  public title: string;

  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private modalService: NgbModal,
    private emailService: EmailService
  ) {}

  ngOnInit() {}

  @ViewChild("content")
  content: ElementRef;

  private newEmailEvent(title: string) {
    console.log("new message", title);

    this.title = title;
    this.modalService.open(this.content, { size: "lg" });
  }

  private sendMessage(modal) {
    this.emailService.sentEmail(this.title, "content");
    console.log("message sent");
    modal.close();
  }
}
