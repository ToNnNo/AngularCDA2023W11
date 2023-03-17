import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  name = "Visiteur";
  state!: boolean;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.authentication.authenticate.subscribe( (value: boolean) => {
      this.state = value;
      this.name = value ? "Admin": "Visiteur";
    });
  }

  public logout(): void {
    this.authentication.logout();
  }
}
