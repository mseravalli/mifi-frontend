import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImportService {
  private importUrl = null;
  private approveImportUrl = null;

  constructor(private http: HttpClient, utils: Utils ) {
    this.importUrl = utils.getBaseUrl() + '/import';
    this.approveImportUrl = utils.getBaseUrl() + '/approve_import';
  }

  importTransactions(fd: FormData) {
	  var body = fd;
		let headers = new Headers();
		headers.append("Access-Control-Allow-Origin", "*");
    const options = {
      headers: new HttpHeaders({ "Access-Control-Allow-Origin":  "*" })
    };
    return this.http.post(this.importUrl, body, options);
  }

  approveImport(isApproved: boolean) {
	  var body = {"isApproved": isApproved};
    return this.http.post(this.approveImportUrl, body);
  }
}
