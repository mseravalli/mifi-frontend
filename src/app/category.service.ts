import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Category } from './category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
  private url = Utils.baseUrl + '/categories';

  constructor(private http: Http) { }

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
