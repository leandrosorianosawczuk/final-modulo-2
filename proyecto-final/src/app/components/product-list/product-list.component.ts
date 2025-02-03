import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-product-list-component',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponentComponent {
  query!: string;
  categories: Array<string>;
  categoryContent: Array<string>;

  constructor() {
    this.categories = ['Polera', 'Camisa', 'Zapatos', 'Medias', 'Pantalón', 'Falda', 'Vestido', 'Blusas', 'Tenis', 'Zapatillas'];
    this.categoryContent = this.categories;
  }

  onSubmit(searchQuery: NgForm): void {
    const filteredData = Array.from(this.categories)
      .filter(item => item.toLowerCase().includes(searchQuery.form.value.search));

    if (filteredData.length > 0) {
      this.categoryContent = filteredData;
    } else {
      this.categoryContent = ["Sin Resultados"];
    }
  }

  restablecerLista() : void {
    this.categoryContent = this.categories;
  }
}
