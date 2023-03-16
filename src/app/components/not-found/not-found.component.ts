import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <header>
      <h2>404 - Not Found</h2>
    </header>
    <section>
      <p>La page demandé n'existe pas. Revenir à la <a routerLink="/">page d'accueil</a></p>
    </section>
  `,
  styles: [
  ]
})
export class NotFoundComponent {

}
