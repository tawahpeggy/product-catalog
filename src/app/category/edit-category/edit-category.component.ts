import { Component, OnInit } from '@angular/core';
import { Category } from '../../category/category.model'
import { HttpClient } from '@angular/common/http';
import { ProductCatalogService } from '../../product-catalog.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private _productcatalogService: ProductCatalogService) { }

  ngOnInit() {
  }

}
