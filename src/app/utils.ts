import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  static handleError(error: any, snackBar: MatSnackBar) {
    var errorMessage = "An error occurred: " + error.message;
    console.error(errorMessage); // for demo purposes only
    Utils.notifyUser(snackBar, errorMessage);
  }

  static notifyUser(snackBar: MatSnackBar, message: string) {
    snackBar.open(
      message,
      "",
      { duration: 5000, }
    );
  }

  static assignColors(categories:any, colorTable:any) {
    var colors = [];
    for (var i = 0; i < categories.length; ++i) {
      var category = categories[i];
      if (category !== "date") {
        var color = colorTable[category]
        if (color == null) {
          console.warn("Color not found for category: '" + category + "'");
        } else {
          colors.push(colorTable[category]);
        }
      }
    }
    return colors;
  }
}
