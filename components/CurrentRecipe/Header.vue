<template>
  <div class="flex justify-between row-span-1">
    <div class="flex flex-col text-lg p-8">
      <h1 class="uppercase text-yellow-600">
        {{ currentRecipe.dishTypes[0] }}
      </h1>
      <h1 class="text-5xl font-bold">
        {{ currentRecipe.title }}
      </h1>
      <!-- Rating -->
      <div class="flex justify-between flex-row">
        <h1>
          Rating: {{ currentRecipe.spoonacularScore }}
        </h1>
        <h1>
          Likes: {{ currentRecipe.aggregateLikes }}
        </h1>
      </div>
    </div>
    <div>
      <img class="h-1/2 rounded-lg" :src="currentRecipe.image" alt="recipe.title">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['currentRecipe'])
}
</script>
