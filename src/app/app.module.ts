import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailsComponent } from './category/category-list/category-details/category-details.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    AddCategoryComponent,
    SignupComponent,
    LoginComponent,
    EditCategoryComponent,
    AddProductComponent,
    EditProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
