import { Component, OnInit, Input, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Utils } from '../utils';
import { Category } from '../category';
import { SubCategory } from '../sub-category';
import { Transaction } from '../transaction';

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

  // displayedColumns = ['userId', 'userName', 'progress', 'color'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.sort);
  }
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface Transaction {
  id: string;
  accountNumber: string;
  transactionDate: string;
  receiver: string;
  purpose: string;
  amount: number;
  currency: string;
  category: string;
  subCategory: string;
  comment: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);
  get data(): Transaction[] { return this.dataChange.value; }
  request: Array<any> = [{"id":2074,"accountNumber":"number26","transactionDate":"2017-07-04","exchangeDate":"2017-07-04","receiver":"N26 Bank","purpose":"Outgoing Transfer, Overdraft / tolerated overdraft Q2-2017 N26 Bank","amount":-0.0100,"currency":"EUR","category":"finance","subCategory":"costs and fees","comment":"yolo","approved":true},{"id":2033,"accountNumber":"hvb","transactionDate":"2017-07-04","exchangeDate":"2017-06-30","receiver":", ","purpose":"ABSCHLUSS KEINE BELEG INFORMATIONEN, SIEHE GGF. KONTOAUSZUG !","amount":-11.2500,"currency":"EUR","category":"finance","subCategory":"costs and fees","approved":true},{"id":2032,"accountNumber":"hvb","transactionDate":"2017-07-04","exchangeDate":"2017-07-04","receiver":", ","purpose":"EC-GAA/POS VAPIANO Essen           DE/ 03.07.2017 20:45 Uhr C KF01  EC-TERMINAL 55573285 E2E-ID 55573285074247030717 204559","amount":-7.2500,"currency":"EUR","category":"living","subCategory":"food","approved":true},{"id":2031,"accountNumber":"hvb","transactionDate":"2017-07-03","exchangeDate":"2017-07-03","receiver":", ","purpose":"EC-GAA/POS REWE SAGT DANKE. Muenchen-S chwant 01.07.2017 11:32 Uhr C KF01  EC-TERMINAL 56034723 E2E-ID 56034723005171010717 113248","amount":-11.6500,"currency":"EUR","category":"living","subCategory":"food","approved":true},{"id":2030,"accountNumber":"hvb","transactionDate":"2017-07-03","exchangeDate":"2017-07-03","receiver":", ","purpose":"SEPA BASISLASTSCHRIFT clever fit Betriebs GmbH + Co.KG PNR23037800 ,KNR1104561 Bei trag 01.07.2017 29,90 EUR KUNDENREFERENZ PNR23037800 ,KNR1104561 MANDATSREFERENZ 1104561 GLAEUBIGER-ID DE10004000009 49322","amount":-29.9000,"currency":"EUR","category":"free time","subCategory":"sport","approved":true}];

  constructor() {
    // Fill up the database with 100 users.
    this.dataChange.next( this.request.map(x => new Transaction(x.id, x.accountNumber, x.transactionDate, x.receiver, x.purpose, x.amount, x.currency, x.category, x.subCategory, x.comment) ) )
  }
  
  /** Adds a new user to the database. */
  // addUser() {
  //   const copiedData = this.data.slice();
  //   copiedData.push(this.createNewUser());
  //   this.dataChange.next(copiedData);
  // }

  // /** Builds and returns a new User. */
  // private createNewUser() {
  //   const name =
  //       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
  //       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  //   return {
  //     id: (this.data.length + 1).toString(),
  //     name: name,
  //     progress: Math.round(Math.random() * 100).toString(),
  //     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  //   };
  // }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _sort: MatSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Transaction[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  getSortedData(): Transaction[] {
    const data = this._exampleDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'accountNumber': [propertyA, propertyB] = [a.accountNumber, b.accountNumber]; break;
        case 'transactionDate': [propertyA, propertyB] = [a.transactionDate, b.transactionDate]; break;
        case 'receiver': [propertyA, propertyB] = [a.receiver, b.receiver]; break;
        case 'purpose': [propertyA, propertyB] = [a.purpose, b.purpose]; break;
        case 'amount': [propertyA, propertyB] = [a.amount, b.amount]; break;
        case 'currency': [propertyA, propertyB] = [a.currency, b.currency]; break;
        case 'category': [propertyA, propertyB] = [a.category, b.category]; break;
        case 'subCategory': [propertyA, propertyB] = [a.subCategory, b.subCategory]; break;
        case 'comment': [propertyA, propertyB] = [a.comment, b.comment]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}
