import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Account } from './account';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {
  private url = null;

  constructor(private http: Http, utils: Utils ) {
    this.url = utils.getBaseUrl() + '/accounts';
  }

  getAccounts(): Promise<Array<any>> {
		let headers = new Headers();
    let options = new RequestOptions({ headers });
    return this.http.get(this.url, options)
      .toPromise()
      .then(response => response.json().accounts)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
