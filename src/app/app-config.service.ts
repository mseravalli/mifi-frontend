import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig;

  constructor(private http: Http) { }

  loadAppConfig() {
    return this.http.get('/assets/data/appConfig.json')
      .toPromise()
      .then(response => {
        this.appConfig = response.json();
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
