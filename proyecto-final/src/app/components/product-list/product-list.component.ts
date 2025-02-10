import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ProductCardComponentComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list-component',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ProductCardComponentComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponentComponent {
  query!: string;
  categories: Array<string>;
  products: Array<any>;
  categoryContent: Array<string>;
  productsContent: Array<any>;

  constructor() {
    this.categories = ['Polera', 'Camisa', 'Zapatos', 'Medias', 'Pantalón', 'Falda', 'Vestido', 'Blusas', 'Tenis', 'Zapatillas'];
    this.products = [
      {
        descripcion: 'Prenda de vestir para el torso y los hombros, de tela ligera y sin abotonaduras, que se usa como vestimenta informal.',
        imagen: 'img/polera.jpg',
        nombre: 'Polera'
      },
      {
        descripcion: 'Prenda de vestir que se ajusta a la cintura y llega generalmente hasta el pie, cubriendo cada pierna separadamente.',
        imagen: 'img/pantalon.jpeg',
        nombre: 'Pantalón'
      },
      {
        descripcion: 'Calzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel, fieltro, paño u otro tejido, más o menos escotado por el empeine.',
        imagen: 'img/zapato.jpeg',
        nombre: 'Zapato'
      },
      {
        descripcion: 'Prenda de punto, seda, nailon, etcétera, que cubre el pie y la pierna hasta la rodilla o más arriba. Disponibles en todos los colores.',
        imagen: 'img/medias.jpg',
        nombre: 'Medias'
      }
    ]
    this.categoryContent = this.categories;
    this.productsContent = this.products;
  }

  onSubmit(searchQuery: NgForm): void {
    const filteredData = Array.from(this.categories)
      .filter(item => item.toLowerCase().includes(searchQuery.form.value.search));

    const filteredCategories = Array.from(this.products)
      .filter(item => item.nombre.toLowerCase().includes(searchQuery.form.value.search));

    if (filteredData.length > 0) {
      this.categoryContent = filteredData;
      this.productsContent = filteredCategories;
    } else {
      this.categoryContent = ["Sin Resultados"];
      this.productsContent = [{
        descripcion: 'Sin Resultados',
        imagen: 'img/no-results.png',
        nombre: 'Ninguna vestimenta'
      }];
    }
  }

  restablecerLista() : void {
    this.categoryContent = this.categories;
    this.productsContent = this.products;
  }

  item(item: string): void {
    alert(`${ item } agregado correctamente`);
  }
}
