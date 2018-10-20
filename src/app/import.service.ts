import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImportService {
  private importUrl = null;
  private approveImportUrl = null;

  constructor(private http: Http, utils: Utils ) {
    this.importUrl = utils.getBaseUrl() + '/import';
    this.approveImportUrl = utils.getBaseUrl() + '/approve_import';
  }

  importTransactions(fd: FormData) {
	  var body = fd;
		let headers = new Headers();
		headers.append("Access-Control-Allow-Origin", "*");
    let options = new RequestOptions({ headers });
    return this.http.post(this.importUrl, body, options)
      .toPromise()
      .then(response => response.json())
      .catch(Utils.handleError);
  }

  approveImport(isApproved: boolean) {
	  var body = {"isApproved": isApproved};
    return this.http.post(this.approveImportUrl, body)
      .toPromise()
      .then(response => response.json())
      .catch(Utils.handleError);
  }
}
