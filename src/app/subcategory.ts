export class Subcategory {
  name:     string;
  color:    string;
  selected: boolean;

  constructor(name: string, color: string, selected: boolean) {
    this.name     = name;
    this.color    = color;
    this.selected = selected;
  }
}

