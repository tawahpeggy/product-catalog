import { Component, OnInit } from '@angular/core';
import { Category } from '../../category/category.model'
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroupDirective,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ProductCatalogService } from '../../product-catalog.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
name:string;
  constructor(private _productcatalogService: ProductCatalogService,private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
//  //edit an existing category
//    this._productcatalogService.updateCategory()
//   .subscribe((data: Category[])=>{
//     this.updatecategory = data;
//     console.log(this.updatecategory);
//   })
    
  }

//  editcategory(categoryid){
//    this.getcategory(categoryid).subscribe(data => {
//      this._id=data._categoryid;
//      this.categoryForm.setValue({
//        name:data.name
//      });
//    })
//  }
}
