export class Transaction {
  id: string;
  accountName: string;
  transactionDate: string;
  receiver: string;
  purpose: string;
  amount: number;
  currency: string;
  category: string;
  subCategory: string;
  comment: string;

  constructor(
      id: string,
      accountName: string,
      transactionDate: string,
      receiver: string,
      purpose: string,
      amount: number,
      currency: string,
      category: string,
      subCategory: string,
      comment: string
  ) {
    this.id = id;
    this.accountName = accountName;
    this.transactionDate = transactionDate;
    this.receiver = receiver;
    this.purpose = purpose;
    this.amount = amount;
    this.currency = currency;
    this.category = category;
    this.subCategory = subCategory;
    this.comment = comment;
  }
}
