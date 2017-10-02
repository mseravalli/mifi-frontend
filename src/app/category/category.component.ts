import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [CategoryService],
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: String[];

  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit() { }

}
