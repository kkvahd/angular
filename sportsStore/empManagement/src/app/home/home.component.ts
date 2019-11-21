import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { AuthenticationService } from '../authentication.service';
import { ProductServiceService } from '../product-service.service';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<Product> = []
  waterSports: Array<Product> = [];
  football: Array<Product> = [];
  chess: Array<Product> = [];

  constructor(private httpClient: HttpClient, private service: ProductServiceService, private router: Router) { }

  ngOnInit() {
    this.fetchProducts();

  }

  fetchProducts() {
    this.httpClient.get<Array<Product>>('http://localhost:3000/products').subscribe(
      data => {
        this.products = data;
        console.log(this.products);
        data.forEach(product => {
          if (product.category === 'Watersports') {
            this.waterSports.push(product);
          } else if (product.category === 'Soccer') {
            this.football.push(product);
          } else if (product.category === 'Chess') {
            this.chess.push(product);
          }
        });
      }
    );
  }

  imageClicked(product) {
    let id = +product[product.length-1];
    let dataObject = this.products.find(e => e.id == id)
    this.service.getDetails(dataObject);
    this.router.navigateByUrl('/productDetails');
  }
}
