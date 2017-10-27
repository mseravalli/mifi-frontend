import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImportService {

  constructor(private http: Http) { }

  importTransactions(fd: FormData) {
	  var body = fd;
		let headers = new Headers();
    let options = new RequestOptions({ headers });
    return this.http.post(Utils.baseUrl + '/import', body, options)
      .toPromise()
      .then(response => response.json())
      .catch(Utils.handleError);
  }

  approveImport(isApproved: boolean) {
	  var body = {"isApproved": isApproved};
    return this.http.post(Utils.baseUrl + '/approve_import', body)
      .toPromise()
      .then(response => response.json())
      .catch(Utils.handleError);
  }
}
