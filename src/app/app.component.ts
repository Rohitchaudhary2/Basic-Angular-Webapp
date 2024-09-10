import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter = signal(0)

  increment(){
    this.counter.set(this.counter() + 1)
  }

  decrement(){
    this.counter.set(this.counter() - 1)
  }
}
