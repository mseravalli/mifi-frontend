import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Category } from './category';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimeseriesService {
  private url = 'http://localhost:9000/api/v0.1/accounts/timeseries';

  constructor(private http: Http) { }

  getTimeseries(range: String, startDate: Date, endDate: Date): Promise<Array<any>> {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + Utils.formatDate(startDate)
      + "&endDate=" + Utils.formatDate(endDate);
    return this.http.get(this.url + parameters)
      .toPromise()
      .then(response => response.json().data)
      .catch(Utils.handleError);
  }
}
