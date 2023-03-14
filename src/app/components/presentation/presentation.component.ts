import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  firstname = 'Stéphane';

  product = { name: 'Pomme', price: 12.99 };

  html = '<b>coucou</b>';

  source = 'assets/images/loxy.jpeg';

  message?: string; // string | undefined

  users = ["Ambre", "Anas", "Axel", "Benjamin", "Brannigan"];

  public hello(): void {
    alert('Hello World');
  }

  public confirmation(event: MouseEvent): void {
    event.preventDefault();
    console.log(event.target);
    confirm("Etes vous sur ?");
  }

  public showMessage(): void {
    alert(this.message);
  }
}
