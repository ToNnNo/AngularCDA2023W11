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
import {ServiceComponent} from "./components/service/service.component";
import {ObservableComponent} from "./components/observable/observable.component";
import {ParametersComponent} from "./components/parameters/parameters.component";
import {DetailComponent} from "./components/detail/detail.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {UserComponent} from "./components/user/user.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";

const routes: Routes = [
  { path: "", component: HomeComponent, title: "Accueil" },
  { path: "presentation", component: PresentationComponent, title: "Présentation" },
  { path: "todo", component: TodolistComponent, title: "Todo List" },
  { path: "filters", component: FiltersComponent, title: "Les filtres" },
  { path: "directives", component: DirectiveComponent, title: "Les directives" },
  { path: "locale", component: LocaleComponent, title: "Les locales" },
  {
    path: "custom",
    // path permet juste de créer une base pour l'url des enfants
    children: [
      { path: "", redirectTo: "pipe", pathMatch: "full" }, // prefix
      { path: "pipe", component: CustomPipeComponent, title: "Filtres personnalisés" }
    ]
  },
  { path: "form", component: FormComponent, title: "Template Driven Forms" },
  { path: "signup", component: SignupComponent, title: "Inscription" },
  { path: "service", component: ServiceComponent, title: "Les services" },
  { path: "observable", component: ObservableComponent, title: "Les observables" },
  {
    path: "parameters",
    component: ParametersComponent,
    title: "Paramètres d'url",
    // nesting routes
    children: [
      { path: ":slug", component: DetailComponent, title: "Détail", canActivate: [AuthenticationGuard] }
    ]
  },
  { path: "authentication", component: AuthenticationComponent, title: "Connexion" },
  {
    path: "user",
    children: [
      { path: "", component: UserComponent, title: "Liste des utilisateurs" },
      { path: ":id", component: UserDetailComponent }
    ]
  },

  // doit toujours être le dernier chemin à tester dans les routes
  { path: "**", component: NotFoundComponent, title: "Not Found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
