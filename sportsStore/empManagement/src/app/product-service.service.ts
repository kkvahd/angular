import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public productBroadcast: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public cartItem: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getDetails(data) {
    if (data) {
      this.productBroadcast.next(data);
    }
  }
  addToCart(item) {
    if (item) {
      let reqItem = item;
      reqItem['empId'] = localStorage['empId'];
      console.log("Posting the cart item----");
      console.log(reqItem);
     return this.http.post('http://localhost:3000/cart', reqItem)
    }
  }
}

