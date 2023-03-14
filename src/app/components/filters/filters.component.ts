import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  date = new Date();

  studients = [
    "Soukaina", "Vanessa", "Bogdan", "Mahatoky", "Benjamin", "Jonathan", "Raphaël",
    "Souleymane", "Sofiane", "Damien", "Samir", "Chaymae", "Anas", "Fatou", "Paul"
  ];

}
