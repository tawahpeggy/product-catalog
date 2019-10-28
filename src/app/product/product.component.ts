import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  id:number;
  
  constructor(private product: ProductService) { }

  ngOnInit() {
    //get all products under all categories.
    
    this.product.getAllproducts().subscribe((data: Product[])=>{
      this.products= data;
      console.log(this.products);
    });
  }
delete(id:number){
this.product.deleteProduct(id).subscribe((data)=>{
this.products= data;
console.log(this.products);
});
}
}
