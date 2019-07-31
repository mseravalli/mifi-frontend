import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImportService } from '../import.service';
import { Account } from '../account';
import { Utils } from '../utils';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  @Input() accounts: Array<Account>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() { } 

  openDialog() {
    let dialogRef = this.dialog.open(ImportDialog, { });
    dialogRef.componentInstance.accounts = this.accounts;
  }
}

@Component({
  selector: 'import-dialog',
  templateUrl: './import.dialog.html',
})
export class ImportDialog {
  isLinear = true;
  importAccount: Account;
  fd: FormData = new FormData();
  importStatusAccount: string;
  importStatusBalance: number;
  startDate: string = "2017-06-01 00:00:00";
  endDate: string = "2017-09-01 00:00:00";

  constructor(
      private importService: ImportService,
      private snackBar: MatSnackBar,
      public dialogRef: MatDialogRef<ImportDialog>,
      @Inject(MAT_DIALOG_DATA) public accounts: any) { }
  
  onNoClick(): void { this.dialogRef.close(); }

  ngOnInit() { }

  fileChange(files: any){
    this.fd.append("csv", files[0]);
  }

	updateStatus(data: any) {
	  this.importStatusAccount = data.account.account;
	  this.importStatusBalance = data.account.balance;
  }

  importTransactions() {
    this.fd.append("startDate", this.startDate);
    this.fd.append("endDate",   this.endDate);
    this.fd.append("importAccountId", this.importAccount.id.toString());
    this.importService.importTransactions(this.fd)
			.subscribe(
        data => this.updateStatus(data),
        error => Utils.handleError(error, this.snackBar)
      );
	}

  approveImport(isApproved: boolean) {
    this.importService.approveImport(isApproved)
			.subscribe(
        resp => null,
        error => Utils.handleError(error, this.snackBar)
      );
		this.onNoClick();
	}
}

