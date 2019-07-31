import { Component, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Account } from './account';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';

import { AccountService } from './account.service';
import { CategoryComboChartService }  from './category-combo-chart.service';
import { CategoryPieChartInService }  from './category-pie-chart-in.service';
import { CategoryPieChartOutService } from './category-pie-chart-out.service';
import { CategoryService } from './category.service';
import { SubCategoryComboChartService }  from './sub-category-combo-chart.service';
import { SubCategoryPieChartInService }  from './sub-category-pie-chart-in.service';
import { SubCategoryPieChartOutService } from './sub-category-pie-chart-out.service';
import { TimeseriesService } from './timeseries.service';
import { TransactionsService } from './transactions.service';

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
  timeseries: Array<any> = [];
  categoryComboChart: Array<any> = [];
  categoryPieChartIn: Array<any> = [];
  categoryPieChartOut: Array<any> = [];
  subCategoryComboChart: Array<any> = [];
  subCategoryPieChartIn: Array<any> = [];
  subCategoryPieChartOut: Array<any> = [];
  transactions: Array<any> = [];

  constructor(
      private accountService: AccountService,
      private categoryService: CategoryService,
      private timeseriesService: TimeseriesService,
      private categoryComboChartService:  CategoryComboChartService,
      private categoryPieChartInService:  CategoryPieChartInService,
      private categoryPieChartOutService: CategoryPieChartOutService,
      private subCategoryComboChartService:  SubCategoryComboChartService,
      private subCategoryPieChartInService:  SubCategoryPieChartInService,
      private subCategoryPieChartOutService: SubCategoryPieChartOutService,
      private transactionsService: TransactionsService,
      private snackBar: MatSnackBar
   ) {
    this.accountService.getAccounts()
      .subscribe(
        accs => {
          this.accounts = accs.accounts.map(
            a => new Account (a.id, a.name, a.color, true, a.balance)
          );
          this.onUserAction(true);
        },
        error => Utils.handleError(error, this.snackBar)
      );
    this.categoryService.getCategories()
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

  onUserAction(reloadNeeded: boolean) {
    if (reloadNeeded) {
      this.timeseriesService.getTimeseries(this.range, this.startDate, this.endDate, this.accounts)
        .subscribe(
          t => this.timeseries = t.data,
          error => Utils.handleError(error, this.snackBar)
        );

      this.categoryComboChartService.getCategoryComboChart(this.range, this.startDate, this.endDate, this.categories, this.accounts)
        .subscribe(
          t => this.categoryComboChart = t.data,
          error => Utils.handleError(error, this.snackBar)
        );
      this.categoryPieChartInService.getCategoryPieChartIn(this.range, this.startDate, this.endDate, this.categories, this.accounts)
        .subscribe(
          t => this.categoryPieChartIn = t.data,
          error => Utils.handleError(error, this.snackBar)
        );
      this.categoryPieChartOutService.getCategoryPieChartOut(this.range, this.startDate, this.endDate, this.categories, this.accounts)
        .subscribe(
          t => this.categoryPieChartOut = t.data,
          error => Utils.handleError(error, this.snackBar)
        );

      this.subCategoryComboChartService.getSubCategoryComboChart(this.range, this.startDate, this.endDate, this.categories, this.subcategories, this.accounts)
        .subscribe(
          t => this.subCategoryComboChart = t.data,
          error => Utils.handleError(error, this.snackBar)
        );
      this.subCategoryPieChartInService.getSubCategoryPieChartIn(this.range, this.startDate, this.endDate, this.categories, this.subcategories, this.accounts)
        .subscribe(
          t => this.subCategoryPieChartIn = t.data,
          error => Utils.handleError(error, this.snackBar)
        );
      this.subCategoryPieChartOutService.getSubCategoryPieChartOut(this.range, this.startDate, this.endDate, this.categories, this.subcategories, this.accounts)
        .subscribe(
          t => this.subCategoryPieChartOut = t.data,
          error => Utils.handleError(error, this.snackBar)
        );

      this.transactionsService.getTransactions(this.range, this.startDate, this.endDate, this.categories, this.subcategories, this.accounts)
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
