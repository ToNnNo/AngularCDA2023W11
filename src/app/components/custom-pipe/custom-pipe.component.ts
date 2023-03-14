import { Component } from '@angular/core';
import { sortOrder } from "../../types/sortOrderType";

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {

  order: sortOrder = "ASC"; // DESC

  studients = [
    "Soukaina", "Vanessa", "Bogdan", "Mahatoky", "Benjamin", "Jonathan", "Raphaël",
    "Souleymane", "Sofiane", "Damien", "Samir", "Chaymae", "Anas", "Fatou", "Paul",
    "Hugo", "Tarik"
  ];

}
