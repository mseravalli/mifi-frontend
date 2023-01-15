import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Account } from "../account";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent implements OnInit {
  @Input() accounts: Array<Account>;
  @Input() isSharingRatioEnabled: Boolean;
  @Output() onUserAction = new EventEmitter<boolean>();
  @Output() sharingRatioAction = new EventEmitter<Boolean>();

  constructor() {}

  ngOnInit() {}

  updateSharinRatio(): void {
    this.sharingRatioAction.emit(this.isSharingRatioEnabled);
  }

  selectNone(): void {
    for (let a of this.accounts) {
      a.selected = false;
    }

    this.onUserAction.emit(true);
  }

  selectAll(): void {
    for (let a of this.accounts) {
      a.selected = true;
    }

    this.onUserAction.emit(true);
  }

  toggle(): void {
    this.onUserAction.emit(true);
  }
}
