import { Component, OnChanges } from '@angular/core';
import { CategoryService } from './category.service';
import { TimeseriesService } from './timeseries.service';
import { CategoryComboChartService } from './category-combo-chart.service';
import { CategoryPieChartInService } from './category-pie-chart-in.service';
import { Category } from './category';
import { Subcategory } from './subcategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  startDate: Date = new Date( ((new Date()).getFullYear()-2) + "-" + (new Date().getMonth()) + "-01" );
  endDate: Date = new Date();
  range: String = "yyyy-mm";

  categories: Array<Category> = [];
  subcategories: Array<Subcategory> = [];
  timeseries: Array<any> = [];
  categoryComboChart: Array<any> = [];
  categoryPieChartIn: Array<any> = [];

  constructor(private categoryService: CategoryService,
      private timeseriesService: TimeseriesService,
      private categoryComboChartService: CategoryComboChartService,
      private categoryPieChartInService: CategoryPieChartInService
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
      this.timeseriesService.getTimeseries(this.range, this.startDate, this.endDate)
        .then(t => this.timeseries = t);
      this.categoryComboChartService.getCategoryComboChart(this.range, this.startDate, this.endDate, this.categories)
        .then(t => this.categoryComboChart = t);
      this.categoryPieChartInService.getCategoryPieChartIn(this.range, this.startDate, this.endDate, this.categories)
        .then(t => this.categoryPieChartIn = t);
    }
  }
}
