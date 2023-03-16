import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ProductInterface} from "../interfaces/ProductInterface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private subject = new Subject<ProductInterface>();

  constructor() { }

  public add(product: ProductInterface): void {
    this.subject.next(product); // action d'envoyer une valeur depuis l'observable
  }

  public getSubject(): Subject<ProductInterface> {
    return this.subject;
  }

}
