import { Component } from '@angular/core';

import { ProductListComponentComponent } from './components/product-list/product-list.component';
import { ProductCardComponentComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [
    ProductCardComponentComponent,
    ProductListComponentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  item(item: string) {
    alert(`${ item } agregado correctamente`);
  }

}
