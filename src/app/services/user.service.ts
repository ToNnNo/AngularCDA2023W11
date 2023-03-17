import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interfaces/UserInterface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrlApi = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.baseUrlApi}/users`);
  }

  public find(id: string|number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.baseUrlApi}/users/${id}`);
  }
}
