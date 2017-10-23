import { SubCategory } from './sub-category';

export class Category {
  name:          string;
  color:         string;
  selected:      boolean;
  subcategories: Array<SubCategory>;

  constructor(name: string, color: string, selected: boolean, subcategories: Array<any>) {
    this.name     = name;
    this.color    = color;
    this.selected = selected;
    this.subcategories = subcategories.map(s => new SubCategory (s.name, s.color, true));
  }
}
