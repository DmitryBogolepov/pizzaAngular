import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TitleComponent} from "./components/title/title.component";
import {CoolInputDirective} from "./directives/cool-input.directive";
import {ChickenDirective} from "./directives/chicken.directive";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {ChickenProductsPipe} from "./pipes/chicken-products.pipe";
import {WordUpperPipe} from "./pipes/word-upper.pipe";
import {RouterModule} from "@angular/router";
import { PopupComponent } from './components/popup/popup.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    ChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    ChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopupComponent,
  ]
})
export class SharedModule { }
