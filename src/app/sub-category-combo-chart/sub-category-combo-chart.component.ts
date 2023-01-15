import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
} from "@angular/core";
import { Utils } from "../utils";
import { Category } from "../category";
import { SubCategory } from "../sub-category";

declare var google;

@Component({
  selector: "app-sub-category-combo-chart",
  template: '<div id="sub-category-combo-chart"></div>',
  styles: ["#sub-category-combo-chart { height: 350px; }"],
})
export class SubCategoryComboChartComponent implements OnInit {
  @Input() subcategories: Array<SubCategory>;
  @Input() subCategoryComboChart: Array<any>;
  static colorTable = { total: "#2979ff", min: "#ff80ab", max: "#68efad" };
  static data: Array<any> = [];

  constructor() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.subcategories
      .filter((x) => x.selected)
      .map(
        (x) => (SubCategoryComboChartComponent.colorTable[x.name] = x.color)
      );
    this.subcategories
      .filter((x) => x.selected)
      .map(
        (x) =>
          (SubCategoryComboChartComponent.colorTable[x.name + " in"] = x.color)
      );
    this.subcategories
      .filter((x) => x.selected)
      .map(
        (x) =>
          (SubCategoryComboChartComponent.colorTable[x.name + " out"] = x.color)
      );
    SubCategoryComboChartComponent.data = this.subCategoryComboChart;
    google.charts.setOnLoadCallback(this.drawChart);
  }

  private drawChart() {
    var data = google.visualization.arrayToDataTable(
      SubCategoryComboChartComponent.data,
      false
    );
    var options = {
      colors: Utils.assignColors(
        SubCategoryComboChartComponent.data[0],
        SubCategoryComboChartComponent.colorTable
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
      document.getElementById("sub-category-combo-chart")
    );
    chart.draw(data, options);
  }

  ngOnInit() {}
}
