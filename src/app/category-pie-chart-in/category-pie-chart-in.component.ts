import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Utils } from '../utils';
import { Category } from '../category';

declare var google;

@Component({
  selector: 'app-category-pie-chart-in',
  template: '<div id="category-pie-chart-in"></div>',
})
export class CategoryPieChartInComponent implements OnInit {

  @Input() categories: Array<Category>;
  @Input() categoryPieChartIn: Array<any>;
  static colorTable = {"total": "#2979ff", "min": "#ff80ab", "max": "#68efad"};
  static ccc: Array<any> = [];

  constructor() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.categories
      .filter(x => x.selected)
      .map(x => CategoryPieChartInComponent.colorTable[x.name] = x.color);
    CategoryPieChartInComponent.ccc = this.categoryPieChartIn;
    google.charts.setOnLoadCallback(this.drawChart);
  }

  private drawChart() {
    var data = google.visualization.arrayToDataTable( CategoryPieChartInComponent.ccc, false);
    var options = {
      // colors: Utils.assignColors(CategoryPieChartInComponent.ccc[0], CategoryPieChartInComponent.colorTable)
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('category-pie-chart-in'));
    chart.draw(data, options);
  }

  ngOnInit() {
  }

}
