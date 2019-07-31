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

  getCategories() {
    return this.http.get<any>(this.url);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
