
import { Pokemon } from '../models/Pokemon'

const { default: axios } = require('axios')
const { AppState } = require('../AppState')

class ApiService {
  async getPokemonLinks() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    AppState.pokemonLinks = res.data.results.map(p => new Pokemon(p))
    console.log(AppState.pokemonLinks)
  }

  async getPokemonDetails(url) {
    const res = await axios.get(url)
    AppState.pokedex += res.data
  }
}

export const apiService = new ApiService()
