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
  selector: "app-sub-category-pie-chart-out",
  template: '<div id="sub-category-pie-chart-out"></div>',
})
export class SubCategoryPieChartOutComponent implements OnInit {
  @Input() subcategories: Array<SubCategory>;
  @Input() subCategoryPieChartOut: Array<any>;
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
        (x) => (SubCategoryPieChartOutComponent.colorTable[x.name] = x.color)
      );
    SubCategoryPieChartOutComponent.data = this.subCategoryPieChartOut;
    google.charts.setOnLoadCallback(this.drawChart);
  }

  private drawChart() {
    var data = google.visualization.arrayToDataTable(
      SubCategoryPieChartOutComponent.data,
      false
    );
    var categories = [];
    for (var i = 1; i < SubCategoryPieChartOutComponent.data.length; ++i) {
      categories.push(SubCategoryPieChartOutComponent.data[i][0]);
    }
    var options = {
      chartArea: { width: "100%", height: "100%" },
      colors: Utils.assignColors(
        categories,
        SubCategoryPieChartOutComponent.colorTable
      ),
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("sub-category-pie-chart-out")
    );
    chart.draw(data, options);
  }

  ngOnInit() {}
}
