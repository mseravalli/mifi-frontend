import { Utils } from '../utils';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Account } from '../account';

declare var google;

@Component({
  selector: 'app-timeseries',
  template: '<div id="timeseries"></div>',
  styles: ['#timeseries { height: 350px; }']
})
export class TimeseriesComponent implements OnInit, OnChanges {
  @Input() accounts: Array<Account>;
  @Input() timeseries: Array<any>;
  static colorTable = {"total": "#2979ff", "min": "#ff80ab", "max": "#68efad"};

  // this is a hack to allow the draw function to have access
  // to the instance variables
  static ts: Array<any> = [];

  constructor() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.accounts
      .filter(x => x.selected)
      .map(x => TimeseriesComponent.colorTable[x.name] = x.color);
    TimeseriesComponent.ts = this.timeseries;
    google.charts.setOnLoadCallback(this.drawChart);
  }

  // Callback that creates and populates a data table,
  // instantiates the chart, passes in the data and draws it.
  private drawChart() {
    var data = google.visualization.arrayToDataTable( TimeseriesComponent.ts, false);
    var accounts = [];
    for (var i = 1; i < TimeseriesComponent.ts[0].length; ++i) {
      accounts.push(TimeseriesComponent.ts[0][i]);
    }

    // Set chart options
    var options = {
      chartArea: {'left':60, 'top':20, 'width': '100%', 'height': '80%'},
      colors: Utils.assignColors(accounts, TimeseriesComponent.colorTable),
      legend: {'position': 'bottom'}
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('timeseries'));
    chart.draw(data, options);
  }

  ngOnInit() {
  }

}
