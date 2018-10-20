import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Account } from './account';
import { Category } from './category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimeseriesService {
  private url = null;

  constructor(private http: Http, utils: Utils ) {
    this.url = utils.getBaseUrl() + '/accounts/timeseries';
  }

  getTimeseries(range: String,
                startDate: Date,
                endDate: Date,
                accounts: Array<Account>): Promise<Array<any>> {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + Utils.formatDate(startDate)
      + "&endDate=" + Utils.formatDate(endDate)
      + "&accounts=" + accounts.filter(x => x.selected).map(x => x.id);
    return this.http.get(this.url + parameters)
      .toPromise()
      .then(response => response.json().data)
      .catch(Utils.handleError);
  }
}
