import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Account } from "./account";
import { Category } from "./category";
import { SubCategory } from "./sub-category";
import { RequestParameters } from "./request-parameters";
import { Utils } from "./utils";
import "rxjs/add/operator/toPromise";

@Injectable()
export class TransactionsService {
  private transactionsUrl = null;
  private transactionUrl = null;

  constructor(private http: HttpClient, utils: Utils) {
    this.transactionUrl = utils.getBaseUrl() + "/transaction";
  }

  updateTransaction(
    id: string,
    category: string,
    subCategory: string,
    comment: string,
    tags: Array<string>
  ) {
    comment = comment ? comment : "";
    var body = {
      category: category,
      subCategory: subCategory,
      comment: comment,
      tags: tags,
    };
    return this.http.put(this.transactionUrl + "/" + id, body);
  }
}
