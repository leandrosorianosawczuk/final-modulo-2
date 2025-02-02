import { Component, OnInit } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';

import { ProductListComponentComponent } from './components/product-list/product-list.component';
import { ProductCardComponentComponent } from './components/product-card/product-card.component';
import { PokemonComponent } from "./components/pokemon/pokemon.component";

import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  imports: [
    MatBadgeModule,
    ProductCardComponentComponent,
    ProductListComponentComponent,
    PokemonComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  pokemons!: Array<any>;
  pokemonDetails!: Array<any>;
  totalPokemons!: number;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.pokemonDetails = Array();
    this.pokemonCart();
  }

  ngOnInit(): void {
    this.getPokemons()
      .then(pokemons => {
        this.pokemons = pokemons.results;

        this.pokemons.forEach(pokemon => {
          this.getPokemon(pokemon.url)
            .then(details => {
              this.pokemonDetails.push(details);
            });
        });
      }).catch(
        err => console.error(err)
      );
  }

  item(item: string): void {
    alert(`${ item } agregado correctamente`);
  }

  async getPokemons(): Promise<any> {
    return await this.pokemonService.getPokemons();
  }

  async getPokemon(url: string): Promise<any> {
    return await this.pokemonService.getPokemon(url);
  }

  pokemonCart(): void {
    this.totalPokemons = Number(localStorage.getItem('cart'));
  }

}
