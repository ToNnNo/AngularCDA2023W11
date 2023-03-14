import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  date = new Date();

  start = 0;
  end = 5;

  studients = [
    "Soukaina", "Vanessa", "Bogdan", "Mahatoky", "Benjamin", "Jonathan", "Raphaël",
    "Souleymane", "Sofiane", "Damien", "Samir", "Chaymae", "Anas", "Fatou", "Paul",
    "Hugo", "Tarik"
  ];

  public next(): void {
    if(this.end < this.studients.length) {
      this.start = this.start + 5;
      this.end = this.end + 5;
    }
  }

  public prev(): void {
    if( this.start > 0 ) {
      this.start = this.start - 5;
      this.end = this.end - 5;
    }
  }

}
