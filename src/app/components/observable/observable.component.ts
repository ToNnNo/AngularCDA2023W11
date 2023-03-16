import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "../../services/counter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy{

  number?: number;
  // Quand on utilise le ! sur une variable, il faut que la variable est une valeur
  disabled!: boolean;
  subscription?: Subscription;

  constructor(private counter: CounterService) { }

  // utiliser pour initialiser les variables ou appeler des actions au chargement du composant
  ngOnInit(): void {
    this.disabled = false;
  }

  public start(): void {
    this.disabled = true;
    this.number = undefined;

    this.subscription = this.counter.run().subscribe({
      next: (value: number) => {
        this.number = value;
      },
      complete: () => {
        this.disabled = false;
      }
    });

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.counter.clear();
  }
}
