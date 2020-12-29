<template>
  <div class="bg-white rounded-lg text-black p-16 text-2xl h-full shadow-lg overflow-auto">
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
