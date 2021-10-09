import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductFormComponent
  ]
})
export class AdminModule { }
