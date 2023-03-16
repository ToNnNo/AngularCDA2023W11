import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {PresentationComponent} from "./components/presentation/presentation.component";
import {TodolistComponent} from "./components/todolist/todolist.component";
import {FiltersComponent} from "./components/filters/filters.component";
import {DirectiveComponent} from "./components/directive/directive.component";
import {LocaleComponent} from "./components/locale/locale.component";
import {CustomPipeComponent} from "./components/custom-pipe/custom-pipe.component";
import {FormComponent} from "./components/form/form.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [
  { path: "", component: HomeComponent, title: "Accueil" },
  { path: "presentation", component: PresentationComponent, title: "Présentation" },
  { path: "todo", component: TodolistComponent, title: "Todo List" },
  { path: "filters", component: FiltersComponent, title: "Les filtres" },
  { path: "directives", component: DirectiveComponent, title: "Les directives" },
  { path: "locale", component: LocaleComponent, title: "Les locales" },
  {
    path: "custom",
    children: [
      { path: "", redirectTo: "pipe", pathMatch: "full" }, // prefix
      { path: "pipe", component: CustomPipeComponent, title: "Filtres personnalisés" }
    ]
  },
  { path: "form", component: FormComponent, title: "Template Driven Forms" },
  { path: "signup", component: SignupComponent, title: "Inscription" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
