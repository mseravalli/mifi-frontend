export class Transaction {
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

  constructor(
      id: string,
      accountNumber: string,
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
    this.accountNumber = accountNumber;
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
