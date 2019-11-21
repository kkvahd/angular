import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';
import { CartComponent } from 'src/app/cart/cart.component';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct: Product;

  constructor(private service: ProductServiceService,private _snackBar: MatSnackBar ,private authService: AuthenticationService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.service.productBroadcast.subscribe(data => {
      this.currentProduct = data;
    })
  }

  addToCart() {
    if (this.authService.isAuthenticatedEmployee()) {
      this._snackBar.open("Added to Cart", "Okay", {
        duration: 2000,
      });
      this.service.addToCart(this.currentProduct).subscribe(e => {
        console.log(e);
        this.router.navigateByUrl('/cart');
      })
    }else{
      this.router.navigateByUrl('/login');
    }


  }

}
