import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,OnDestroy {

  constructor(private cartService:CartService , private activatedRoute:ActivatedRoute,private productService:ProductService) { }
  public formValue = {
    productTitle: '',
    address: '',
    phone: ''
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
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
    this.subscriptionOrder?.unsubscribe();
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

    this.subscriptionOrder = this.productService.createOrder({
      product:this.formValue.productTitle,
      address:this.formValue.address,
      phone:this.formValue.phone,
    })
      .subscribe(response => {
        if (response.success && !response.message){
          alert('Спасибо за заказ');
          this.formValue = {
            productTitle: '',
            address: '',
            phone: ''
          }
        } else {
          alert('ОШИБКА');
        }
      })
  }
}
