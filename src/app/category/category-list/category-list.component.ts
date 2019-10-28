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
id:number;
category:any;
  
  constructor(private productCatalog: ProductCatalogService) { }

  ngOnInit() {
    //gets all categories
  this.productCatalog.getAllCategories()
  .subscribe((data: Category[])=>{
    this.categories = data;
    console.log(this.categories);
  });
   
  }


  
  //  //edit an existing category
  //  this.productCatalog.putCategory()
  // .subscribe((data: Category[])=>{
  //   this.updatecategory = data;
  //   console.log(this.putcategory);
  // })

  // //delete's  a category
    delete(id: number) {
    this.productCatalog.deleteCategory(id)
    .subscribe((data)=>{
      this.category = data;
      console.log(this.category);
    });
  }
}
