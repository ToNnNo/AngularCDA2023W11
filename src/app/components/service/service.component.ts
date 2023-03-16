import { Component } from '@angular/core';
import {CaesarCipherService} from "../../services/caesar-cipher.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  message?: string; // string | undefined
  result?: string;

  constructor(private caesarCipher: CaesarCipherService, private title: Title) {}

  public crypt(): void {
    if(this.message != undefined) {
      this.title.setTitle(this.message);
      this.result = this.caesarCipher.encode(this.message);
      this.message = undefined;
    }
  }

}
