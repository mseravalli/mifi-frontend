import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImportService } from '../import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { } 

  openDialog() {
    this.dialog.open(ImportDialog, { });
  }
}

@Component({
  selector: 'import-dialog',
  templateUrl: './import.dialog.html',
})
export class ImportDialog {
  isLinear = true;
  importAccount: string;
  fd: FormData = new FormData();
  accounts = ['db','hvb','n26'];
  importStatusAccount: string;
  importStatusBalance: number;

  constructor(
      private importService: ImportService,
      public dialogRef: MatDialogRef<ImportDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
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
    this.fd.append("importAccount", this.importAccount);
    this.importService.importTransactions(this.fd)
			.then(data => this.updateStatus(data));
	}

  approveImport(isApproved: boolean) {
    this.importService.approveImport(isApproved);
	}
}

