import { Component, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Account } from './account';
import { Category } from './category';
import { RequestParameters } from './request-parameters';
import { SubCategory } from './sub-category';
import { Utils } from './utils';

import { GetterService } from './getter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  startDate: Date = new Date(
    ((new Date()).getFullYear()-2) + "-" + (new Date().getMonth()+1) + "-01"
  );
  endDate: Date = new Date();

  range: String = "yyyy-mm";

  accounts: Array<Account> = [];
  categories: Array<Category> = [];
  subcategories: Array<SubCategory> = [];
  isSharingRatioEnabled: Boolean = true;

  timeseries: Array<any> = [];
  categoryComboChart: Array<any> = [];
  categoryPieChartIn: Array<any> = [];
  categoryPieChartOut: Array<any> = [];
  subCategoryComboChart: Array<any> = [];
  subCategoryPieChartIn: Array<any> = [];
  subCategoryPieChartOut: Array<any> = [];
  transactions: Array<any> = [];

  constructor(
      private getterService: GetterService,
      private snackBar: MatSnackBar
   ) {
    this.getterService.getData("/accounts")
      .subscribe(
        accs => {
          this.accounts = accs.accounts.map(
            a => new Account (a.id, a.name, a.color, true, a.balance)
          );
          this.onUserAction(true);
        },
        error => Utils.handleError(error, this.snackBar)
      );
    this.getterService.getData("/categories")
      .subscribe(
        cats => {
          this.categories = cats.categories.map(
            c => new Category (c.name, c.color, true, c.subCategories)
          );
          this.onUserAction(true);
        },
        error => Utils.handleError(error, this.snackBar)
      );
  }

  changeDate(dateRange: any) {
    this.startDate = dateRange.startDate;
    this.endDate = dateRange.endDate;
    this.range = dateRange.range;
    this.onUserAction(true);
  }

  sharingRatioAction(isSharingRatioEnabled: Boolean) {
    this.isSharingRatioEnabled = isSharingRatioEnabled;
    this.onUserAction(true);
  }

  onUserAction(reloadNeeded: boolean) {
    var requestParameters: RequestParameters = new RequestParameters(
      this.startDate,
      this.endDate,
      this.range,
      this.accounts,
      this.categories,
      this.subcategories,
      this.isSharingRatioEnabled
    );

    if (reloadNeeded) {
      this.getterService.getData("/accounts/timeseries", requestParameters)
        .subscribe(
          t => {
            this.timeseries = t.data;
            // create a forced onchange envent for accounts by copying the array
            this.accounts = this.accounts.map(x => x);
          },
          error => Utils.handleError(error, this.snackBar)
        );

      this.getterService.getData("/categories/aggregate", requestParameters)
        .subscribe(
          t => this.categoryComboChart = t.data,
          error => Utils.handleError(error, this.snackBar)
        );
      this.getterService.getData("/categories/in", requestParameters)
        .subscribe(
          t => this.categoryPieChartIn = t.data,
          error => Utils.handleError(error, this.snackBar)
        );
      this.getterService.getData("/categories/out", requestParameters)
        .subscribe(
          t => this.categoryPieChartOut = t.data,
          error => Utils.handleError(error, this.snackBar)
        );

      this.getterService.getData("/subcategories/aggregate", requestParameters)
        .subscribe(
          t => this.subCategoryComboChart = t.data,
          error => Utils.handleError(error, this.snackBar)
        );
      this.getterService.getData("/subcategories/in", requestParameters)
        .subscribe(
          t => this.subCategoryPieChartIn = t.data,
          error => Utils.handleError(error, this.snackBar)
        );
      this.getterService.getData("/subcategories/out", requestParameters)
        .subscribe(
          t => this.subCategoryPieChartOut = t.data,
          error => Utils.handleError(error, this.snackBar)
        );

      this.getterService.getData("/transactions", requestParameters)
        .subscribe(
          t => this.transactions = t.transactions,
          error => Utils.handleError(error, this.snackBar)
        );
    }
  }

  singleCategorySelected() {
    return this.categories.map(x => x.selected).filter(x => x).length == 1;
  }
}
