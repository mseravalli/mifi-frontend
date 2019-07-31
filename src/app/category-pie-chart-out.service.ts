import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Category } from './category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryPieChartOutService {
  private url = null;

  constructor(private http: HttpClient, utils: Utils ) {
    this.url = utils.getBaseUrl() + '/categories/out';
  }

  getCategoryPieChartOut(range: String,
                         startDate: Date,
                         endDate: Date,
                         categories: Array<Category>,
                         accounts: Array<Account>) {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + Utils.formatDate(startDate)
      + "&endDate=" + Utils.formatDate(endDate)
      + "&categories=" + categories.filter(x => x.selected).map(x => x.name)
      + "&accounts=" + accounts.filter(x => x.selected).map(x => x.id);
    return this.http.get<any>(this.url + parameters);
  }
}
