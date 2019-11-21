import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any = [];
  checkoutItems: any = [];

  constructor(private service: ProductServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/cart').subscribe(
      data => {
        this.cartItems = data;
        console.log(this.cartItems)
      })
  }
  checkoutClicked() {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i]['empId'] == localStorage['empId']) {
        this.checkoutItems.push(this.cartItems[i]);

        this.http.post('http://localhost:3000/orders', this.checkoutItems[i]).subscribe(e =>
          console.log("Orders triggered")
        )
        this.http.delete('http://localhost:3000/cart/' + this.cartItems[i]['id']).subscribe(e =>{
          console.log("Delete triggered");
          
        })
        
      }
    }
    debugger;
    this.cartItems = [];
  }
}
