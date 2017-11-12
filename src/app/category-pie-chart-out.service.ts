import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Account } from './account';
import { Category } from './category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryPieChartOutService {
  private url = Utils.baseUrl + '/categories/out';

  constructor(private http: Http) { }

  getCategoryPieChartOut(range: String,
                         startDate: Date,
                         endDate: Date,
                         categories: Array<Category>,
                         accounts: Array<Account>): Promise<Array<any>> {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + Utils.formatDate(startDate)
      + "&endDate=" + Utils.formatDate(endDate)
      + "&categories=" + categories.filter(x => x.selected).map(x => x.name)
      + "&accounts=" + accounts.filter(x => x.selected).map(x => x.name);
    return this.http.get(this.url + parameters)
      .toPromise()
      .then(response => response.json().data)
      .catch(Utils.handleError);
  }
}
