import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from '../product.model';
import { Category } from 'src/app/category/category.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private _productService :ProductService) { }
  // //adds a product
  // products:Product=new Product();
  // onSubmit(add:NgForm){
  //   this._productService.createProduct(add.value).subscribe(data=>{
  //     this.products= new Product();
  //     console.log(this.products);
  //   })
  // } 

  ngOnInit() {
  }

}
