import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: string[] = [];
  titles : string[] = ["#", 'Nombre', 'Detalle', 'Precio', 'Stock', 'Acciones'];

  constructor() { }

  ngOnInit(): void {
    for(let i=1; i< 11; i++){
      this.products.push(` Producto ${i} `);
    }
  }

}
