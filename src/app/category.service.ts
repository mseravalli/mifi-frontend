import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Category } from './category';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
  private categoryUrl = 'http://localhost:9000/api/v0.1/categories';

  constructor(private http: Http) { }

  getCategories(): Promise<Array<any>> {
    return this.http.get(this.categoryUrl)
      .toPromise()
      .then(response => response.json().categories)
      .catch(this.handleError);
  }

  selectAll(categories: Array<Category>): void {
    // subCategories = [];
  }

  selectNone(): void {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
