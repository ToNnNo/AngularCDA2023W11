import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  display = true;

  orientation?: string;

  payment = 'pending';

  progress = 10;
  bgcolor = 'red';

  public information(): string|null {
    if(!this.display) {
      return null;
    }

    return "Hello World";
  }

}
