import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {catchError, map, of, retry, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {
  }

  public products: ProductType[] = [];
  loading:boolean = false;

  ngOnInit() {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: data => {
            this.products = data;
            console.log('test')
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        })
  }
}
