import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Utils } from '../utils';
import { Category } from '../category';
import { SubCategory } from '../sub-category';

declare var google;

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: Array<any>;
  displayedColumns = ['id',
    'accountNumber',
    'transactionDate',
    'receiver',
    'purpose',
    'amount',
    'currency',
    'category',
    'subCategory',
    'comment'];

  dataSource = new ExampleDataSource();

  ngOnInit() {
  }
}

const data: Array<any> = [{"id":2074,"accountNumber":"number26","transactionDate":"2017-07-04","exchangeDate":"2017-07-04","receiver":"N26 Bank","purpose":"Outgoing Transfer, Overdraft / tolerated overdraft Q2-2017 N26 Bank","amount":-0.0100,"currency":"EUR","category":"finance","subCategory":"costs and fees","comment":"yolo","approved":true},{"id":2033,"accountNumber":"hvb","transactionDate":"2017-07-04","exchangeDate":"2017-06-30","receiver":", ","purpose":"ABSCHLUSS KEINE BELEG INFORMATIONEN, SIEHE GGF. KONTOAUSZUG !","amount":-11.2500,"currency":"EUR","category":"finance","subCategory":"costs and fees","approved":true},{"id":2032,"accountNumber":"hvb","transactionDate":"2017-07-04","exchangeDate":"2017-07-04","receiver":", ","purpose":"EC-GAA/POS VAPIANO Essen           DE/ 03.07.2017 20:45 Uhr C KF01  EC-TERMINAL 55573285 E2E-ID 55573285074247030717 204559","amount":-7.2500,"currency":"EUR","category":"living","subCategory":"food","approved":true},{"id":2031,"accountNumber":"hvb","transactionDate":"2017-07-03","exchangeDate":"2017-07-03","receiver":", ","purpose":"EC-GAA/POS REWE SAGT DANKE. Muenchen-S chwant 01.07.2017 11:32 Uhr C KF01  EC-TERMINAL 56034723 E2E-ID 56034723005171010717 113248","amount":-11.6500,"currency":"EUR","category":"living","subCategory":"food","approved":true},{"id":2030,"accountNumber":"hvb","transactionDate":"2017-07-03","exchangeDate":"2017-07-03","receiver":", ","purpose":"SEPA BASISLASTSCHRIFT clever fit Betriebs GmbH + Co.KG PNR23037800 ,KNR1104561 Bei trag 01.07.2017 29,90 EUR KUNDENREFERENZ PNR23037800 ,KNR1104561 MANDATSREFERENZ 1104561 GLAEUBIGER-ID DE10004000009 49322","amount":-29.9000,"currency":"EUR","category":"free time","subCategory":"sport","approved":true}];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }
  
  disconnect() {}
}
