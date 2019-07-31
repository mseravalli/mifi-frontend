import { Injectable } from '@angular/core';
import { HttpClient } from      '@angular/common/http';
import { Category } from './category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Injectable()
export class CategoryService {
  private url = null;

  constructor(private http: HttpClient, utils: Utils ) {
    this.url = utils.getBaseUrl() + '/categories';
  }

  getCategories(): Promise<Array<any>> {
		let headers = new Headers();
    let options = new RequestOptions({ headers });
    return this.http.get(this.url, options)
      .toPromise()
      .then(response => response.json().categories)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
