import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() accounts: Array<Account>;
  @Output() onUserAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
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
  
  toggle(a: Account): void {
    this.onUserAction.emit(true);
  }
}
