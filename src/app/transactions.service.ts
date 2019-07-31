import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionsService {
  private transactionsUrl = null;
  private transactionUrl = null;

  constructor(private http: HttpClient, utils: Utils ) {
    this.transactionsUrl = utils.getBaseUrl() + '/transactions';
    this.transactionUrl = utils.getBaseUrl() + '/transaction';
  }

  getTransactions(range: String,
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
    return this.http.get<any>(this.transactionsUrl + parameters);
  }

  updateTransaction(id: string, category: string, subCategory: string, comment: string) {
    comment = comment ? comment : "";
	  var body = {"category": category, "subCategory": subCategory, "comment": comment};
    return this.http.put(this.transactionUrl + '/' + id, body);
  }
}
