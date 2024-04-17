import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService){

  }
  products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
    // Add more products here
  ];

  addToCart(product: any) {
    
  }

 

  ngOnInit(): void {
this.productService.getProducts().subscribe(x=>
  {
    console.log("data",x);
  }
)
  }
}
