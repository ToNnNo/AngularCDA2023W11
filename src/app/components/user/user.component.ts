import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserInterface} from "../../interfaces/UserInterface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: UserInterface[] = [];

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.user.findAll().subscribe( (data: UserInterface[]) => {
      this.users = data;
    });
  }

  public refresh(): void {
    this.users = [];
    this.load();
  }

}
