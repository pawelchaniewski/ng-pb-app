import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-compose-button",
  templateUrl: "./compose-button.component.html",
  styleUrls: ["./compose-button.component.scss"]
})
export class ComposeButtonComponent implements OnInit {
  @Output()
  newEmail: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  createNewEmail() {
    this.newEmail.emit("i'm new");
  }
}
