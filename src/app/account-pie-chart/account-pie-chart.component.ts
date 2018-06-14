import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Utils } from '../utils';
import { Account } from '../account';

declare var google;

@Component({
  selector: 'app-account-pie-chart',
  template: '<div id="account-pie-chart"></div>',
})
export class AccountPieChartComponent implements OnInit {
  @Input() accounts: Array<Account>;
  static colorTable = {"total": "#2979ff", "min": "#ff80ab", "max": "#68efad"};

  // this is a hack to allow the draw function to have access
  // to the instance variables
  static apc: Array<any> = [];

  constructor() { 
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.accounts
      .filter(x => x.selected)
      .map(x => AccountPieChartComponent.colorTable[x.name] = x.color);
    AccountPieChartComponent.apc = this.accounts
      .map(x => [x.name, x.balance] );
    AccountPieChartComponent.apc.unshift(['account', 'amount']);
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnInit() {
  }

  // Callback that creates and populates a data table,
  // instantiates the chart, passes in the data and draws it.
  private drawChart() {
    var data = google.visualization.arrayToDataTable( AccountPieChartComponent.apc, false);
    var accounts = [];
    for (var i = 1; i < AccountPieChartComponent.apc.length; ++i) {
      accounts.push(AccountPieChartComponent.apc[i][0]);
    }

    // Set chart options
    var options = {
      chartArea: {'width': '100%', 'height': '100%'},
      colors: Utils.assignColors(accounts, AccountPieChartComponent.colorTable)
    };

    var chart = new google.visualization.PieChart(document.getElementById('account-pie-chart'));
    chart.draw(data, options);
  }
}
