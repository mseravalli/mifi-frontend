import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Category } from './category';
import { Utils } from './utils';
import { RequestParameters } from './request-parameters';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetterService {
  private url = null;

  constructor(private http: HttpClient, utils: Utils ) {
    this.url = utils.getBaseUrl();
  }

  getData(path: String, requestParameters: RequestParameters = null) {
    const parameters = (requestParameters != null) ? ("?" + requestParameters.asUrlParameters()) : "";
    return this.http.get<any>(this.url + path + parameters);
  }
}
