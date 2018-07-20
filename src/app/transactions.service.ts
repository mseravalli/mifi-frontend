import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Account } from './account';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionsService {
  constructor(private http: Http) { }

  getTransactions(range: String,
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
    return this.http.get(Utils.baseUrl + '/transactions' + parameters)
      .toPromise()
      .then(response => response.json().transactions)
      .catch(Utils.handleError);
  }

  updateTransaction(id: string, category: string, subCategory: string, comment: string) {
    comment = comment ? comment : "";
	  var body = {"category": category, "subCategory": subCategory, "comment": comment};
    return this.http.put(Utils.baseUrl + '/transaction/' + id, body)
      .toPromise()
      .then(response => response.json())
      .catch(Utils.handleError);
  }
}
