import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = signal(0)
  count = this.counter.asReadonly()

  increment(){
    this.counter.set(this.counter() + 1 )
  }

  decrement(){
    this.counter.set(this.counter() - 1 )
  }
}
