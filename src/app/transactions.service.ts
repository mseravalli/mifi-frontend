import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionsService {
  private url = Utils.baseUrl + '/transactions';

  constructor(private http: Http) { }

  getTransactions(range: String, startDate: Date, endDate: Date, categories: Array<Category>, subcategories: Array<SubCategory>): Promise<Array<any>> {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + Utils.formatDate(startDate)
      + "&endDate=" + Utils.formatDate(endDate)
      + "&categories=" + categories.filter(x => x.selected).map(x => x.name)
      + "&subCategories=" + subcategories.filter(x => x.selected).map(x => x.name);
    return this.http.get(this.url + parameters)
      .toPromise()
      .then(response => response.json().transactions)
      .catch(Utils.handleError);
  }

}
