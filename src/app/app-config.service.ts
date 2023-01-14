import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AppConfigService {
  private appConfig;

  constructor(private http: HttpClient) {}

  loadAppConfig() {
    return this.http
      .get("/assets/data/appConfig.json")
      .toPromise()
      .then((response) => {
        this.appConfig = response;
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
