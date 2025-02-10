import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card-component',
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductCardComponentComponent {
  @Input() nombre: string;
  @Input() descripcion: string;
  @Input() imagen: string;
  @Output() agregarItem = new EventEmitter<string>();

  constructor() {
    this.nombre = 'Nombre inicial';
    this.descripcion = 'Descripcion inicial';
    this.imagen = 'favicon.ico';
  }

  agregarProducto(item: string) {
    this.agregarItem.emit(item);
  }

}
