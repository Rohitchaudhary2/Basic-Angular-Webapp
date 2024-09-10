import { Component, input, output } from '@angular/core';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = input.required<number>()
  incrementCounter = output()
  decrementCounter = output()

  increment(){
    this.incrementCounter.emit()
  }

  decrement(){
    this.decrementCounter.emit()
  }

}
