import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Category } from './category';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimeseriesService {
  private timeseriesUrl = 'http://localhost:9000/api/v0.1/accounts/timeseries';

  constructor(private http: Http) { }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  getTimeseries(range: String, startDate: Date, endDate: Date): Promise<Array<any>> {
    var parameters: String = "?sumRange=" + range
      + "&startDate=" + this.formatDate(startDate)
      + "&endDate=" + this.formatDate(endDate);
    return this.http.get(this.timeseriesUrl + parameters)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
