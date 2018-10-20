import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  baseUrl: String = null;

  constructor(appConfigService: AppConfigService){
    this.baseUrl = appConfigService.getConfig().baseUrl;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  static baseUrl: String = environment.baseUrl;
  
  static formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  static assignColors(categories:any, colorTable:any) {
    var colors = [];
    for (var i = 0; i < categories.length; ++i) {
      if (categories[i] !== "date") {
        colors.push(colorTable[categories[i]]);
      }
    }
    return colors;
  }
}
