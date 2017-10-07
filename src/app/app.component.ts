import { Component } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';
import { Subcategory } from './subcategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  categories: Array<Category> = [];
  subcategories: Array<Subcategory> = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories()
      .then(cats => this.categories = cats.map(
        c => new Category (c.name, c.color, false, c.subCategories)
      ));
  }
}
