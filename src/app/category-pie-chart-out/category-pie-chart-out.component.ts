import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Utils } from '../utils';
import { Category } from '../category';

declare var google;

@Component({
  selector: 'app-category-pie-chart-out',
  template: '<div id="category-pie-chart-out"></div>',
})
export class CategoryPieChartOutComponent implements OnInit {

  @Input() categories: Array<Category>;
  @Input() categoryPieChartOut: Array<any>;
  static colorTable = {"total": "#2979ff", "min": "#ff80ab", "max": "#68efad"};
  static ccc: Array<any> = [];

  constructor() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.categories
      .filter(x => x.selected)
      .map(x => CategoryPieChartOutComponent.colorTable[x.name] = x.color);
    CategoryPieChartOutComponent.ccc = this.categoryPieChartOut;
    google.charts.setOnLoadCallback(this.drawChart);
  }

  private drawChart() {
    var data = google.visualization.arrayToDataTable( CategoryPieChartOutComponent.ccc, false);
    var options = {
      // colors: Utils.assignColors(CategoryPieChartOutComponent.ccc[0], CategoryPieChartOutComponent.colorTable)
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('category-pie-chart-out'));
    chart.draw(data, options);
  }

  ngOnInit() {
  }

}
