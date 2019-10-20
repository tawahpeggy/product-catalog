import { Component, OnInit } from '@angular/core';
import {Category } from  "../category.model";
import { ProductCatalogService} from "../../product-catalog.service";
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories: Category[];

  constructor(private productCatalog: ProductCatalogService) { }

  ngOnInit() {
  this.productCatalog.getAllCategories()
  .subscribe((data: Category[])=>{
    this.categories = data;
    console.log(this.categories);
  })
   
  }
//   //delete's  a category
// deleteCategory(category: Category): void { 
//   // Pass movie object 
//      this.productCatalogService.deleteCategory (category)(this.productCatalog)
//     .subscribe( data => {
//       this.categories = this.categories.filter(u => u !== category);
//     })
//};
}
