import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,OnDestroy {

  constructor(private cartService:CartService , private activatedRoute:ActivatedRoute) { }
  public formValue = {
    productTitle: '',
    address: '',
    phone: ''
  }

  private subscription: Subscription | null = null;
  ngOnInit(): void {
    // if (this.cartService.product-card) {
    //   this.formValue.productTitle = this.cartService.product-card;
    // }

    this.subscription = this.activatedRoute.queryParams.subscribe((params)=> {
      if (params['product']) {
        this.formValue.productTitle = params['product'];
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  public createOrder() {
    if (!this.formValue.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValue.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValue.phone) {
      alert('Заполните телефон');
      return;
    }
    alert('Спасибо за заказ');
    this.formValue = {
      productTitle: '',
      address: '',
      phone: ''
    }
  }

}
