import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../category/category.model'
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroupDirective,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ProductCatalogService, CategoryForm } from '../../product-catalog.service';
import { NgForm } from '@angular/forms';
import { Router, Params } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @ViewChild('update', {static:true}) formdata:NgForm;
  category: Category;
  categoryName: string = "";

  constructor(private _productcatalogService: ProductCatalogService,private router:Router,private route:ActivatedRoute, private formBuilder:FormBuilder) { }
//(ngSubmit)="onSubmit(update)" ;
// update="ngForm";
id:number;


  ngOnInit() {
//  //edit an existing category

this.id= +this.route.snapshot.params["id"]
this._productcatalogService.getCategory(this.id).subscribe(data => {
  this.category = data;
  this.categoryName=this.category.name;
});
this.route.params.subscribe((data:Params)=>{
  this.id = +data['id'];
  this._productcatalogService.getCategory(this.id).subscribe(data => {
    this.category = data;
    this.categoryName=this.category.name;
  });
  
});



 
}

 onSubmit(formData){
   console.log(formData);
   let data : CategoryForm = {
     name: formData.name
   }
   
   this._productcatalogService.updateCategory(this.id, data).subscribe(res =>{
     console.log(res);
     
     this.router.navigate(['/category-list'])
   },(err) =>{
     console.log(err);
   })
 }
  
}
