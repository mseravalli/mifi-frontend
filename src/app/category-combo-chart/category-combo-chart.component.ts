import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
} from "@angular/core";
import { Utils } from "../utils";
import { Category } from "../category";

declare var google;

@Component({
  selector: "app-category-combo-chart",
  template: '<div id="category-combo-chart"></div>',
  styles: ["#category-combo-chart { height: 350px; }"],
})
export class CategoryComboChartComponent implements OnInit {
  @Input() categories: Array<Category>;
  @Input() categoryComboChart: Array<any>;
  static colorTable = { total: "#2979ff", min: "#ff80ab", max: "#68efad" };
  static data: Array<any> = [];

  constructor() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.categories
      .filter((x) => x.selected)
      .map((x) => (CategoryComboChartComponent.colorTable[x.name] = x.color));
    this.categories
      .filter((x) => x.selected)
      .map(
        (x) =>
          (CategoryComboChartComponent.colorTable[x.name + " in"] = x.color)
      );
    this.categories
      .filter((x) => x.selected)
      .map(
        (x) =>
          (CategoryComboChartComponent.colorTable[x.name + " out"] = x.color)
      );
    // console.log(CategoryComboChartComponent.colorTable)
    CategoryComboChartComponent.data = this.categoryComboChart;
    google.charts.setOnLoadCallback(this.drawChart);
  }

  private drawChart() {
    var data = google.visualization.arrayToDataTable(
      CategoryComboChartComponent.data,
      false
    );
    var options = {
      colors: Utils.assignColors(
        CategoryComboChartComponent.data[0],
        CategoryComboChartComponent.colorTable
      ),
      isStacked: "true",
      seriesType: "bars",
      series: {
        0: { type: "line" },
        1: { type: "line" },
        2: { type: "line" },
      },
      chartArea: { left: 50, top: 20, width: "100%", height: "80%" },
      legend: { position: "bottom" },
    };

    var chart = new google.visualization.ComboChart(
      document.getElementById("category-combo-chart")
    );
    chart.draw(data, options);
  }

  ngOnInit() {}
}
