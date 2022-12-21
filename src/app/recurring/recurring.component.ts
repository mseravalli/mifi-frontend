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
  static colorTable = {"total": "#2979ff", "min": "#ff80ab", "max": "#68efad"};

  static raw_data = {
    "monthly": {
      "finance-other": [
        [   "date",   "total",      "min",    "max",         "in",        "out"],
        ["2020-12",   5806.03,   -4972.35, 10778.38,      6729.59,     -3611.25],
        ["2021-01",  13907.27,  -23596.42, 37503.69,     20524.85,    -20291.58],
        ["2021-02",   3082.36, -169010.18,172092.54,    166491.16,   -166195.15],
      ],
      "house-other": [
        [   "date",   "total",      "min",    "max",         "in",        "out"],
        ["2020-12",   5806.03,   -4972.35, 10778.38,      6729.59,     -3611.25],
        ["2021-01",  13907.27,  -23596.42, 37503.69,     20524.85,    -20291.58],
        ["2021-02",   3082.36, -169010.18,172092.54,    166491.16,   -166195.15],
      ],
    },
    "yearly": {
      "living-other": [
        [   "date",   "total",      "min",    "max",         "in",        "out"],
        ["2020-12",   5806.03,   -4972.35, 10778.38,      6729.59,     -3611.25],
        ["2021-01",  13907.27,  -23596.42, 37503.69,     20524.85,    -20291.58],
        ["2021-02",   3082.36, -169010.18,172092.54,    166491.16,   -166195.15],
      ],
      "mobility-other": [
        [   "date",   "total",      "min",    "max",         "in",        "out"],
        ["2020-12",   5806.03,   -4972.35, 10778.38,      6729.59,     -3611.25],
        ["2021-01",  13907.27,  -23596.42, 37503.69,     20524.85,    -20291.58],
        ["2021-02",   3082.36, -169010.18,172092.54,    166491.16,   -166195.15],
      ],
    },
  };

  data;

  constructor() {
    this.data = RecurringComponent.raw_data;

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  private drawChart() {
    for (const recurring_period in RecurringComponent.raw_data){
      for (const categorySubcategory in RecurringComponent.raw_data[recurring_period]){
        var data = google.visualization.arrayToDataTable(RecurringComponent.raw_data[recurring_period][categorySubcategory], false);
        var options = {
          // FIXME: use the right colors
          // colors: Utils.assignColors(RecurringComponent.data[0], RecurringComponent.colorTable),
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
