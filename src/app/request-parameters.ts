import { Account } from './account';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Utils } from './utils';

export class RequestParameters {
  startDate: Date = new Date(
    ((new Date()).getFullYear()-2) + "-" + (new Date().getMonth()+1) + "-01"
  );
  endDate: Date = new Date();
  range: String = "yyyy-mm";
  accounts: Array<Account> = [];
  categories: Array<Category> = [];
  subcategories: Array<SubCategory> = [];

  constructor(startDate: Date,
              endDate: Date,
              range: String,
              accounts: Array<Account>,
              categories: Array<Category>,
              subcategories: Array<SubCategory>) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.range = range;
    this.accounts = accounts;
    this.categories = categories;
    this.subcategories = subcategories;
  }
  
  asUrlParameters(): string {
    var parameters: string = "sumRange=" + this.range
      + "&startDate=" + Utils.formatDate(this.startDate)
      + "&endDate=" + Utils.formatDate(this.endDate)
      + "&categories=" + this.categories.filter(x => x.selected).map(x => x.name)
      + "&subCategories=" + this.subcategories.filter(x => x.selected).map(x => x.name)
      + "&accounts=" + this.accounts.filter(x => x.selected).map(x => x.id);
    return parameters;
  }

  asRequestBody() {
    var body = {
      "sumRange": this.range,
      "startDate": Utils.formatDate(this.startDate),
      "endDate": Utils.formatDate(this.endDate),
      "categories": this.categories.filter(x => x.selected).map(x => x.name),
      "subCategories": this.subcategories.filter(x => x.selected).map(x => x.name),
      "accounts": this.accounts.filter(x => x.selected).map(x => x.id)
    } 
    return body;
  }
}

