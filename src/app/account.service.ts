import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Utils } from './utils';
import 'rxjs/add/operator/toPromise';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Injectable()
export class AccountService {
  private url = null;

  constructor(private http: HttpClient, utils: Utils ) {
    this.url = utils.getBaseUrl() + '/accounts';
  }

  getAccounts(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
