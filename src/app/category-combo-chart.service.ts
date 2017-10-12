import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Category } from './category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryComboChartService {
  private url = 'http://localhost:9000/api/v0.1/categories/aggregate';

  constructor(private http: Http) { }

  getCategoryComboChart(range: String, startDate: Date, endDate: Date, categories: Array<Category>): Promise<Array<any>> {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + Utils.formatDate(startDate)
      + "&endDate=" + Utils.formatDate(endDate)
      + "&categories=" + categories.filter(x => x.selected).map(x => x.name);
    return this.http.get(this.url + parameters)
      .toPromise()
      .then(response => response.json().data)
      .catch(Utils.handleError);
  }
}
