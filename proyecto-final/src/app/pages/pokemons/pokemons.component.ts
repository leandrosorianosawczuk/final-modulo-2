import { Component, OnInit } from '@angular/core';

import { MatBadge } from '@angular/material/badge';

import { PokemonComponent } from '../../components/pokemon/pokemon.component';

import { PokemonService } from '../../services/pokemon.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemons',
  imports: [
    MatBadge,
    MatButtonModule,
    PokemonComponent
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})

export class PokemonsComponent implements OnInit {
  pokemons!: Array<any>;
  pokemonDetails: Array<any>;
  totalPokemons!: number;
  offset: number;
  isDisabled: boolean;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.pokemonDetails = Array();
    this.pokemonCart();
    this.offset = 0;
    this.isDisabled = true;
  }

  ngOnInit(): void {
    this.getPokemons(this.offset)
      .then(pokemons => {
        this.pokemons = pokemons.results;

        this.pokemons.forEach(pokemon => {
          this.getPokemon(pokemon.url)
            .then(details => {
              this.pokemonDetails.push(details);
            });
        });
      }).catch(() => {
        // err => console.error(err);
        alert('Ocurrió un error al cargar los Pokémons');
      });
  }

  async getPokemons(offset: number): Promise<any> {
    return await this.pokemonService.getPokemons(offset);
  }

  async getPokemon(url: string): Promise<any> {
    return await this.pokemonService.getPokemon(url);
  }

  pokemonCart(): void {
    this.totalPokemons = Number(localStorage.getItem('cart'));
  }

  previousPage(): void {
    this.offset -= 20;
    if (this.offset <= 0) {
      this.isDisabled = true;
    }
    this.getPokemons(this.offset)
      .then(pokemons => {
        this.pokemons = pokemons.results;
        this.pokemonDetails = Array();

        this.pokemons.forEach(pokemon => {
          this.getPokemon(pokemon.url)
            .then(details => {
              this.pokemonDetails.push(details);
            });
        });
      }).catch(() => {
        // err => console.error(err);
        alert('Ocurrió un error al cargar los Pokémons');
      });
  }

  nextPage(): void {
    this.isDisabled = false;
    this.offset += 20;
    this.getPokemons(this.offset)
      .then(pokemons => {
        this.pokemons = pokemons.results;
        this.pokemonDetails = Array();

        this.pokemons.forEach(pokemon => {
          this.getPokemon(pokemon.url)
            .then(details => {
              this.pokemonDetails.push(details);
            });
          });
      }).catch(() => {
        // err => console.error(err);
        alert('Ocurrió un error al cargar los Pokémons');
      });
  }

}
