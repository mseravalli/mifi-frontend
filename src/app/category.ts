import { Subcategory } from './subcategory';

export class Category {
  name:          string;
  color:         string;
  selected:      boolean;
  subcategories: Array<Subcategory>;

  constructor(name: string, color: string, selected: boolean, subcategories: Array<any>) {
    this.name     = name;
    this.color    = color;
    this.selected = selected;
    this.subcategories = subcategories.map(s => new Subcategory (s.name, s.color, true));
  }
}
