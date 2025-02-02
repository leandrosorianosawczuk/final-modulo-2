import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  getPokemons(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get<any>(`${ this.url }?limit=30`)
        .subscribe({
          next: data => resolve(data),
          error: err => reject(err)
        });
    });
  }

  getPokemon(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get<any>(url)
        .subscribe({
          next: data => resolve(data),
          error: err => reject(err)
        });
    });
  }
}
