import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Subcategory } from '../subcategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [CategoryService],
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categories: Array<Category>;
  @Input() subcategories: Array<Subcategory>;
  @Output() onUserAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

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
  
  // toggle will be called before the angular toggle
  // therefore to simulate the action the status need to be artifically changed 
  // at the beginning and at the end
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
      this.categories[index].subcategories.map(s => this.subcategories.push(s));
      this.subcategories.map(s => s.selected = true);
    }
    else {
      this.subcategories.splice(0, this.subcategories.length);
    }
 
    this.onUserAction.emit(true);
  }
}
