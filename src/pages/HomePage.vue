<template>
  <h5>
    <div class="container-fluid">
      <div class="row">
        <Pokemon v-for="pokemon in pokemonLinks" :key="pokemon.name" :pokemon="pokemon" />
      </div>
    </div>
  </h5>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { apiService } from '../services/ApiService'
export default {
  name: 'Home',
  setup() {
    onMounted(() => apiService.getPokemonLinks())
    return {
      pokemonLinks: computed(() => AppState.pokemonLinks)
    }
  }

}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
