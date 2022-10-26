import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/subcategory.service';
import { Category } from 'src/app/models/category';
import { SubCategory } from 'src/app/models/subCategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  subcategories: SubCategory[] = [];
  currentCategory: Category;

  constructor(private categoryService: CategoryService,private subCategoryService:SubCategoryService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getSubCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      (this.categories = response.data)
    });
    }

  getSubCategories() {
    this.subCategoryService.getSubCategories().subscribe((response) => {
      (this.subcategories = response.data)
    });
    }

}