import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  tasks: string[] = [];
  task?:string;

  public add(): void {
    if(!this.task?.trim()) {
      return;
    }

    this.tasks.push(this.task!.trim());
    this.task = undefined;
  }

  public remove(index: number): void {
    this.tasks.splice(index, 1);
  }
}
