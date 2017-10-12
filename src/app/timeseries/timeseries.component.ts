import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

declare var google;

@Component({
  selector: 'app-timeseries',
  templateUrl: './timeseries.component.html',
  styleUrls: ['./timeseries.component.css']
})
export class TimeseriesComponent implements OnInit, OnChanges {
  @Input() timeseries: Array<any>;
  static a: Array<any> = [];

  constructor() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    TimeseriesComponent.a = this.timeseries;
    google.charts.setOnLoadCallback(this.drawChart);
  }

  // Callback that creates and populates a data table,
  // instantiates the chart, passes in the data and draws it.
  private drawChart() {
    var data = google.visualization.arrayToDataTable( TimeseriesComponent.a, false);
  
    // Set chart options
    var options = {
      chartArea: {'left':60, 'top':20, 'width': '100%', 'height': '80%'},
      'legend': {'position': 'bottom'}
    };
  
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('barchart'));
    chart.draw(data, options);
  }

  ngOnInit() {
  }

}
