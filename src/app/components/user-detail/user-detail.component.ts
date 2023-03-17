import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserInterface} from "../../interfaces/UserInterface";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user?: UserInterface

  constructor(
    private route: ActivatedRoute,
    private userClient: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // const id:number = +params.get('id')!;
      const id = params.get('id')!;
      this.load(id);
    })
  }

  public load(id: string|number): void {
    this.userClient.find(id).subscribe((data: UserInterface) => {
      this.user = data;
    })
  }
}
