import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubCategoryPieChartOutService {
  private url = null;

  constructor(private http: HttpClient, utils: Utils ) {
    this.url = utils.getBaseUrl() + '/subcategories/out';
  }

  getSubCategoryPieChartOut(range: String,
                            startDate: Date,
                            endDate: Date,
                            categories: Array<Category>,
                            subcategories: Array<SubCategory>,
                            accounts: Array<Account> ) {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + Utils.formatDate(startDate)
      + "&endDate=" + Utils.formatDate(endDate)
      + "&categories=" + categories.filter(x => x.selected).map(x => x.name)
      + "&subCategories=" + subcategories.filter(x => x.selected).map(x => x.name)
      + "&accounts=" + accounts.filter(x => x.selected).map(x => x.id);
    return this.http.get<any>(this.url + parameters);
  }
}
