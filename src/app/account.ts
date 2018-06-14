export class Account {
  name:          string;
  color:         string;
  selected:      boolean;
  balance:       number;

  constructor(name: string, color: string, selected: boolean) {
    this.name     = name;
    this.color    = color;
    this.selected = selected;
    this.balance  = 1.0;
  }
}

