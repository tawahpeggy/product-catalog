import { Component, OnInit } from '@angular/core';
import { Category } from '../../category/category.model'
import { HttpClient } from '@angular/common/http';
import { ProductCatalogService } from '../../product-catalog.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
 constructor(private _productcatalogService: ProductCatalogService) { }
categories:Category=new Category();
 //categoryModel = new Category("peggy","shes a fat and short girl" , " " , 1234);
//  //form validation.
//  validatedTopic(value){
//    if(value==='default'){
//      this.topicHasError=true;
//    }
//    else{
//      this.topicHasError=false;
//    }
//  }
onSubmit(add:NgForm){
  this._productcatalogService.createCategory(add.value).subscribe(data=>{
    this.categories= new Category();
    console.log(this.categories);
  });
  
  // , error => console.log('Error!',error) 
}
  

  ngOnInit() {
  }

}
