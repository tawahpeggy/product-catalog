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
y
  ngOnInit() {
  this.productCatalog.getAllCategories()
  .subscribe(function(data: Category[]){
    this.categories = data;
    console.log(this.categories);
  })
  
  }

}
