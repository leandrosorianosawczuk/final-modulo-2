import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-pokemons',
  imports: [
    MatBadge,
    PokemonComponent
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {
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
