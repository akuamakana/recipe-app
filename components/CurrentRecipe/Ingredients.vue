<template>
  <div class="lg:bg-white rounded-lg lg:text-black lg:p-16 px-8 text-2xl h-full shadow-lg overflow-auto">
    <h1 class="text-5xl font-bold mb-2">Ingredients</h1>
    <p v-for="ingredient in currentRecipe.extendedIngredients" :key="ingredient.id" class="my-2">
      {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['currentRecipe'])
}
</script>

<style scoped>
  ::-webkit-scrollbar {
    width: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #3C4354;
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #FCBE84;
    border-radius: 10px;
  }
</style>
