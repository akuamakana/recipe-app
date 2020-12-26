<template>
  <div class="container w-screen">
    <Navbar />
    <div class="flex justify-center w-screen">
      <div class="grid grid-cols-4 gap-4 w-3/4">
        <RecipeCard v-for="recipe in recipes.recipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import RecipeCard from '~/components/RecipeCard'
export default {
  components: Navbar,
  RecipeCard,
  async asyncData ({ $axios }) {
    const recipes = await $axios.$get('https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=6411032cc1b64ea0a7269e0da6e7fb58')
    return { recipes }
  },
  fetchOnServer: false,
  data () {
    return {
    }
  }
}
</script>

<style>
  body {
    width: 100vw;
  }
</style>
