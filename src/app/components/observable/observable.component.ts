import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "../../services/counter.service";
import {Subscription} from "rxjs";
import {ProductInterface} from "../../interfaces/ProductInterface";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy{

  number?: number;
  // Quand on utilise le ! sur une variable, il faut que la variable est une valeur
  disabled!: boolean;
  subscription?: Subscription;

  products!: ProductInterface[];

  constructor(
    private counter: CounterService,
    private cart: CartService
  ) { }

  // utiliser pour initialiser les variables ou appeler des actions au chargement du composant
  ngOnInit(): void {
    this.disabled = false;

    // récupérer avec un appel API
    this.products = [
      { name: "Pomme", price: 12.99 },
      { name: "Poire", price: 2.50 },
      { name: "Banane", price: 1.99 },
    ];

  }

  public start(): void {
    this.disabled = true;
    this.number = undefined;

    this.subscription = this.counter.run().subscribe({
      next: (value: number) => {
        this.number = value;
      },
      complete: () => {
        this.disabled = false;
      }
    });

  }

  public addToCart(product: ProductInterface): void {
    this.cart.add(product);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.counter.clear();
  }
}
