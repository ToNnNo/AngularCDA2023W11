import { Component } from '@angular/core';
import {ProductInterface} from "../../interfaces/ProductInterface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  products: ProductInterface[] = [];
  product: ProductInterface = {name: "", price: 0};

  public save(form: NgForm): void {

    form.control.markAllAsTouched();

    if( form.valid ) {
      const strPrice = String(this.product.price);
      // + = parseInt() ou parseFloat()
      this.product.price = +strPrice.replace(',', '.');

      this.products.push(this.product);
      this.product = {name: "", price: 0};
      form.resetForm(this.product);
    }
  }

}
