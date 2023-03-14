import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

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

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodolistComponent,
    HomeComponent,
    FiltersComponent,
    DirectiveComponent,
    LocaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
