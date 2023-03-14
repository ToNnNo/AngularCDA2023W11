import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {PresentationComponent} from "./components/presentation/presentation.component";
import {TodolistComponent} from "./components/todolist/todolist.component";
import {FiltersComponent} from "./components/filters/filters.component";
import {DirectiveComponent} from "./components/directive/directive.component";

const routes: Routes = [
  { path: "", component: HomeComponent, title: "Accueil" },
  { path: "presentation", component: PresentationComponent, title: "Présentation" },
  { path: "todo", component: TodolistComponent, title: "Todo List" },
  { path: "filters", component: FiltersComponent, title: "Les filtres" },
  { path: "directives", component: DirectiveComponent, title: "Les directives" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
