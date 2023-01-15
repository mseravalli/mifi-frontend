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
  selector: "app-sub-category-pie-chart-in",
  template: '<div id="sub-category-pie-chart-in"></div>',
})
export class SubCategoryPieChartInComponent implements OnInit {
  @Input() subcategories: Array<SubCategory>;
  @Input() subCategoryPieChartIn: Array<any>;
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
        (x) => (SubCategoryPieChartInComponent.colorTable[x.name] = x.color)
      );
    SubCategoryPieChartInComponent.data = this.subCategoryPieChartIn;
    google.charts.setOnLoadCallback(this.drawChart);
  }

  private drawChart() {
    var data = google.visualization.arrayToDataTable(
      SubCategoryPieChartInComponent.data,
      false
    );
    var categories = [];
    for (var i = 1; i < SubCategoryPieChartInComponent.data.length; ++i) {
      categories.push(SubCategoryPieChartInComponent.data[i][0]);
    }
    var options = {
      chartArea: { width: "100%", height: "100%" },
      colors: Utils.assignColors(
        categories,
        SubCategoryPieChartInComponent.colorTable
      ),
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("sub-category-pie-chart-in")
    );
    chart.draw(data, options);
  }

  ngOnInit() {}
}
