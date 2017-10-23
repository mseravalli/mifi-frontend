import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubCategory } from '../sub-category';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  @Input() subcategories: Array<SubCategory>;
  @Output() onUserAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  selectNone(): void {
    for (let s of this.subcategories) {
      s.selected = false;
    }
    this.onUserAction.emit(true);
  }

  selectAll(): void {
    for (let s of this.subcategories) {
      s.selected = true;
    }
    this.onUserAction.emit(true);
  }

  toggle(c: SubCategory): void {
    this.onUserAction.emit(true);
  }
}
