import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
  private categoryUrl = 'http://localhost:9000/api/v0.1/categories';
  constructor(private http: Http) { }
  getCategories(): String[] {
    this.http.get(this.categoryUrl, {headers: new Headers({'Access-Control-Allow-Origin': '*'})}).subscribe(data => {
      console.log(data);
    });
    return ["10", "20"];
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
