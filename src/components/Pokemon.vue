<template>
  <div class="col-6 text-center">
    <p>{{ pokemon.name }}</p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: { pokemon: { type: Object, required: true } },
  setup() {
    return {
      pokemonLinks: computed(() => AppState.pokemonLinks)
    }
  }
}
</script>

<style>

</style>
