import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Account } from './account';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubCategoryComboChartService {
  private url = null;

  constructor(private http: Http, utils: Utils ) {
    this.url = utils.getBaseUrl() + '/subcategories/aggregate';
  }

  getSubCategoryComboChart(range: String,
                           startDate: Date,
                           endDate: Date,
                           categories: Array<Category>,
                           subcategories: Array<SubCategory>,
                           accounts: Array<Account> ): Promise<Array<any>> {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + Utils.formatDate(startDate)
      + "&endDate=" + Utils.formatDate(endDate)
      + "&categories=" + categories.filter(x => x.selected).map(x => x.name)
      + "&subCategories=" + subcategories.filter(x => x.selected).map(x => x.name)
      + "&accounts=" + accounts.filter(x => x.selected).map(x => x.id);
    return this.http.get(this.url + parameters)
      .toPromise()
      .then(response => response.json().data)
      .catch(Utils.handleError);
  }
}
