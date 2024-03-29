import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  ViewChild,
} from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/observable/of";
import "rxjs/add/operator/startWith";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/map";

import { Utils } from "../utils";
import { Category } from "../category";
import { SubCategory } from "../sub-category";
import { Transaction } from "../transaction";
import { TransactionsService } from "../transactions.service";

declare var google;

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: Array<any>;
  @Input() categories: Array<Category>;
  @Input() subcategories: Array<SubCategory>;
  // TODO: allow filtering by multiple tags
  @Input() tagFilter = "";

  displayedColumns = [
    // 'id',
    "accountName",
    "transactionDate",
    "receiver",
    "purpose",
    "amount",
    // 'currency',
    "category",
    "subCategory",
    "comment",
    "tags",
  ];

  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  constructor(
    private transactionsService: TransactionsService,
    public snackBar: MatSnackBar
  ) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.sort,
      this.paginator
    );
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.exampleDatabase.dataChange.next(
      this.transactions
        .map(
          (x) =>
            new Transaction(
              x.id,
              x.accountName,
              x.transactionDate,
              x.receiver,
              x.purpose,
              x.amount,
              x.currency,
              x.category,
              x.subCategory,
              x.comment,
              x.tags
            )
        )
        .filter((x) =>
          this.tagFilter == "" ? true : x.tags.includes(this.tagFilter)
        )
    );
  }

  updateTransaction(
    id: string,
    category: string,
    subCategory: string,
    comment: string,
    raw_tags: string
  ) {
    raw_tags = (raw_tags == null || raw_tags.length < 1) ? String("") : raw_tags
    var tags = raw_tags
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x.length > 0);
    this.transactionsService
      .updateTransaction(id, category, subCategory, comment, tags)
      .subscribe(
        (data) => {
          Utils.notifyUser(
            this.snackBar,
            "Transaction " + id + " updated correctly"
          );
        },
        (err) => {
          Utils.notifyUser(
            this.snackBar,
            "Oh Noes! Failed to update transaction " + id + ". Check the backend logs."
          );
          console.error("[mifi] - ", err);
        }
      );
  }
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Transaction[]> = new BehaviorSubject<
    Transaction[]
  >([]);

  get data(): Transaction[] {
    return this.dataChange.value;
  }

  constructor() {}
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(
    private _exampleDatabase: ExampleDatabase,
    private _sort: MatSort,
    private _paginator: MatPaginator
  ) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Transaction[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.getSortedData();
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  getSortedData(): Transaction[] {
    const data = this._exampleDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == "") {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = "";
      let propertyB: number | string = "";

      switch (this._sort.active) {
        case "id":
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case "accountName":
          [propertyA, propertyB] = [a.accountName, b.accountName];
          break;
        case "transactionDate":
          [propertyA, propertyB] = [a.transactionDate, b.transactionDate];
          break;
        case "receiver":
          [propertyA, propertyB] = [a.receiver, b.receiver];
          break;
        case "purpose":
          [propertyA, propertyB] = [a.purpose, b.purpose];
          break;
        case "amount":
          [propertyA, propertyB] = [a.amount, b.amount];
          break;
        case "currency":
          [propertyA, propertyB] = [a.currency, b.currency];
          break;
        case "category":
          [propertyA, propertyB] = [a.category, b.category];
          break;
        case "subCategory":
          [propertyA, propertyB] = [a.subCategory, b.subCategory];
          break;
        case "comment":
          [propertyA, propertyB] = [a.comment, b.comment];
          break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction == "asc" ? 1 : -1)
      );
    });
  }
}
