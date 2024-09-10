import { Component, computed, inject, input, output } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  // counter = input.required<number>()
  // incrementCounter = output()
  // decrementCounter = output()

  // increment(){
  //   this.incrementCounter.emit()
  // }

  // decrement(){
  //   this.decrementCounter.emit()
  // }

  private counterService = inject(CounterService)

  // counter = computed(() => this.counterService.count())
  counter = this.counterService.count

  increment(){
    this.counterService.increment()
  }

  decrement() {
    this.counterService.decrement()
  }
}
