import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Utils } from '../utils';
import { Category } from '../category';

declare var google;

@Component({
  selector: 'app-recurring',
  templateUrl: './recurring.component.html',
  // styleUrls: ['./recurring.component.css']
  styles: ['.recurring-chart { height: 350px; }']
})
export class RecurringComponent implements OnInit {
  @Input() recurringCharts: any;
  @Input() categories: Array<Category>;
  static colorTable = {"total": "#2979ff", "min": "#ff80ab", "max": "#68efad"};

  // {
  //   "monthly": {
  //     "finance-other": [
  //       [   "date",   "total",      "min",    "max",         "in",        "out"],
  //       ["2020-12",   5806.03,   -4972.35, 10778.38,      6729.59,     -3611.25],
  //       ["2021-01",  13907.27,  -23596.42, 37503.69,     20524.85,    -20291.58],
  //     ],
  //     "house-other": [
  //       [   "date",   "total",      "min",    "max",         "in",        "out"],
  //       ["2020-12",   5806.03,   -4972.35, 10778.38,      6729.59,     -3611.25],
  //       ["2021-01",  13907.27,  -23596.42, 37503.69,     20524.85,    -20291.58],
  //     ],
  //   },
  //   "yearly": {
  //     ...
  //   },
  // };
  static raw_data;
  data;

  constructor() {
    this.data = RecurringComponent.raw_data;

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    RecurringComponent.raw_data = this.recurringCharts;
    this.data = this.recurringCharts;

    for (var i = 0; i < this.categories.length; ++i) {
      var categoryName = this.categories[i].name
      for (var j = 0; j < this.categories[i].subcategories.length; ++j) {
        var subCategoryName = this.categories[i].subcategories[j].name
        var subCategoryColor = this.categories[i].subcategories[j].color
        RecurringComponent.colorTable[categoryName+"/"+subCategoryName] = subCategoryColor
      }
    }

    google.charts.setOnLoadCallback(this.drawChart);
  }

  private drawChart() {
    for (const recurring_period in RecurringComponent.raw_data){
      for (const categorySubcategory in RecurringComponent.raw_data[recurring_period]){
        var data = google.visualization.arrayToDataTable(RecurringComponent.raw_data[recurring_period][categorySubcategory], false);
        var options = {
          colors: Utils.assignColors(["total", "min", "max", categorySubcategory, categorySubcategory], RecurringComponent.colorTable),
          isStacked: "true",
          seriesType: "bars",
          series: {
            0: {type: "line"},
            1: {type: "line"},
            2: {type: "line"}
          },
          chartArea: {'left':50, 'top':20, 'width': '100%', 'height': '80%'},
          legend: {'position': 'bottom'}
        };
      
        const chartId = 'recurring-'+recurring_period+'-'+categorySubcategory+'-chart';
        var chart = new google.visualization.ComboChart(document.getElementById(chartId));
        chart.draw(data, options);
      }
    }

  }

  ngOnInit(): void {
  }

}
