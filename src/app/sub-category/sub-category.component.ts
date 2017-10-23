import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category.service';
import { Subcategory } from '../subcategory';
import { SubCategory } from '../sub-category';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  @Input() subcategories: Array<SubCategory>;

  constructor() { }

  ngOnInit() { }

  selectNone(): void {
    for (let s of this.subcategories) {
      s.selected = false;
    }
  }

  selectAll(): void {
    for (let s of this.subcategories) {
      s.selected = true;
    }
  }
}
