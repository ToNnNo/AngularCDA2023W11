import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { registerLocaleData } from "@angular/common";
import fr from "@angular/common/locales/fr";
registerLocaleData(fr);

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';
import { FiltersComponent } from './components/filters/filters.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { SortPipe } from './pipes/sort.pipe';
import { FormComponent } from './components/form/form.component';
import { SignupComponent } from './components/signup/signup.component';
import { ServiceComponent } from './components/service/service.component';
import { ObservableComponent } from './components/observable/observable.component';
import { CartComponent } from './components/cart/cart.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodolistComponent,
    HomeComponent,
    FiltersComponent,
    DirectiveComponent,
    LocaleComponent,
    CustomPipeComponent,
    SortPipe,
    FormComponent,
    SignupComponent,
    ServiceComponent,
    ObservableComponent,
    CartComponent,
    ParametersComponent,
    DetailComponent,
    NotFoundComponent,
    AuthenticationComponent,
    ProfilComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
