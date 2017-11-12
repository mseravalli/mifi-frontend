import { Component, OnChanges } from '@angular/core';

import { Account } from './account';
import { Category } from './category';
import { SubCategory } from './sub-category';

import { CategoryService } from './category.service';
import { TimeseriesService } from './timeseries.service';
import { CategoryComboChartService }  from './category-combo-chart.service';
import { CategoryPieChartInService }  from './category-pie-chart-in.service';
import { CategoryPieChartOutService } from './category-pie-chart-out.service';
import { SubCategoryComboChartService }  from './sub-category-combo-chart.service';
import { SubCategoryPieChartInService }  from './sub-category-pie-chart-in.service';
import { SubCategoryPieChartOutService } from './sub-category-pie-chart-out.service';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  startDate: Date = new Date( ((new Date()).getFullYear()-2) + "-" + (new Date().getMonth()) + "-01" );
  endDate: Date = new Date();

  accounts = [new Account("hvb",      "ff0000", true),
              new Account("db",       "ff0000", true),
              new Account("kalixa",   "ff0000", true),
              new Account("number26", "ff0000", true)];

  range: String = "yyyy-mm";

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

  constructor(private categoryService: CategoryService,
      private timeseriesService: TimeseriesService,
      private categoryComboChartService:  CategoryComboChartService,
      private categoryPieChartInService:  CategoryPieChartInService,
      private categoryPieChartOutService: CategoryPieChartOutService,
      private subCategoryComboChartService:  SubCategoryComboChartService,
      private subCategoryPieChartInService:  SubCategoryPieChartInService,
      private subCategoryPieChartOutService: SubCategoryPieChartOutService,
      private transactionsService: TransactionsService
   ) {
    this.categoryService.getCategories()
      .then(cats => { this.categories = cats.map(
        c => new Category (c.name, c.color, true, c.subCategories)
      );
      this.onUserAction(true);
    });
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
        .then(t => this.timeseries = t);
      
      this.categoryComboChartService.getCategoryComboChart(this.range, this.startDate, this.endDate, this.categories, this.accounts)
        .then(t => this.categoryComboChart = t);
      this.categoryPieChartInService.getCategoryPieChartIn(this.range, this.startDate, this.endDate, this.categories, this.accounts)
        .then(t => this.categoryPieChartIn = t);
      this.categoryPieChartOutService.getCategoryPieChartOut(this.range, this.startDate, this.endDate, this.categories, this.accounts)
        .then(t => this.categoryPieChartOut = t);

      this.subCategoryComboChartService.getSubCategoryComboChart(this.range, this.startDate, this.endDate, this.categories, this.subcategories, this.accounts)
        .then(t => this.subCategoryComboChart = t);
      this.subCategoryPieChartInService.getSubCategoryPieChartIn(this.range, this.startDate, this.endDate, this.categories, this.subcategories, this.accounts)
        .then(t => this.subCategoryPieChartIn = t);
      this.subCategoryPieChartOutService.getSubCategoryPieChartOut(this.range, this.startDate, this.endDate, this.categories, this.subcategories, this.accounts)
        .then(t => this.subCategoryPieChartOut = t);

      this.transactionsService.getTransactions(this.range, this.startDate, this.endDate, this.categories, this.subcategories, this.accounts)
        .then(t => this.transactions = t);
    }
  }

  singleCategorySelected() {
    return this.categories.map(x => x.selected).filter(x => x).length == 1;
  }
}
