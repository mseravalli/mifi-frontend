export class Account {
  id:            number;
  name:          string;
  color:         string;
  selected:      boolean;
  balance:       number;

  constructor(id:       number,
              name:     string,
              color:    string,
              selected: boolean,
              balance:  number) {
    this.id       = id;
    this.name     = name;
    this.color    = color;
    this.selected = selected;
    this.balance  = balance;
  }
}

