import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {PresentationComponent} from "./components/presentation/presentation.component";
import {TodolistComponent} from "./components/todolist/todolist.component";

const routes: Routes = [
  { path: "", component: HomeComponent, title: "Accueil" },
  { path: "presentation", component: PresentationComponent, title: "Présentation" },
  { path: "todo", component: TodolistComponent, title: "Todo List" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
