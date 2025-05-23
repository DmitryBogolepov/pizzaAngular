import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy {
  private observable: Observable<number>;

  constructor(public cartService: CartService) {

    this.observable = new Observable((observer) => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(count++);
      }, 1000);
      const timeout1 =setTimeout(() => {
        observer.complete();
      }, 4000);
      const timeout2 =setTimeout(() => {
        observer.error('world');
      }, 5000);


      return {
        unsubscribe() {
          clearInterval(interval);
          clearTimeout(timeout1);
          clearTimeout(timeout2);
        }
      }
    });
  }
  private subscription: Subscription | null = null;
  ngOnInit() {
    this.observable.subscribe(
      {
        next: (param: number) => {
          console.log('subscriber 1:', param)
        },
        error: (error: string) => {
          console.log('Error!!' + error)
        }
      });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  test() {
    this.observable.subscribe((param: number) => {
      console.log('subscriber 2:', param)
    });
  }
}
