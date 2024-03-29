import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Category } from "../category";
import { SubCategory } from "../sub-category";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  @Input() categories: Array<Category>;
  @Input() subcategories: Array<SubCategory>;
  @Output() onUserAction = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  selectNone(): void {
    for (let c of this.categories) {
      c.selected = false;
    }
    this.subcategories.splice(0, this.subcategories.length);

    this.onUserAction.emit(true);
  }

  selectAll(): void {
    for (let c of this.categories) {
      c.selected = true;
    }
    this.subcategories.splice(0, this.subcategories.length);

    this.onUserAction.emit(true);
  }

  toggle(c: Category): void {
    var countSelected: number = 0;
    var index: number = -1;
    for (var i = 0; i < this.categories.length; ++i) {
      if (this.categories[i].selected) {
        ++countSelected;
        index = i;
      }
    }
    if (countSelected == 1) {
      this.categories[index].subcategories.map((s) =>
        this.subcategories.push(s)
      );
      this.subcategories.map((s) => (s.selected = true));
    } else {
      this.subcategories.splice(0, this.subcategories.length);
    }

    this.onUserAction.emit(true);
  }
}
