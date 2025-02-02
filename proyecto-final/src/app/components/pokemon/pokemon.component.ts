import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-pokemon-component',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardActions
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})

export class PokemonComponent {
  @Input() imagen!: string;
  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Output() agregarPokemon = new EventEmitter<string>();

  constructor() { }

  agregarAlCarrito(): void {
    // Manejar memoria.
    let storage: number = Number(localStorage.getItem('cart'));
    if (storage) {
      storage += 1;
      localStorage.setItem('cart', String(storage));
    } else {
      localStorage.setItem('cart', '1');
    }
    this.agregarPokemon.emit(localStorage.getItem('cart')!);
  }

}
