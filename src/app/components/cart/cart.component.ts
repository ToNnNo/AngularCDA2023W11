import {Component, OnInit} from '@angular/core';
import {ProductInterface} from "../../interfaces/ProductInterface";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  products: ProductInterface[] = [];
  total = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getSubject().subscribe({
      // recevoir une valeur envoyer par un observable
      next: (product: ProductInterface) => {
        this.products.push(product);
        this.total += product.price;
      }
    })
  }

}
