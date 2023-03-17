import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{

  state!: boolean;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.authentication.authenticate.subscribe((value: boolean) => {
      this.state = value;
    });
  }

  public login(): void {
    this.authentication.login();
  }

  public logout(): void {
    this.authentication.logout();
  }

}
