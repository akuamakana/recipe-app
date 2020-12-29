<template>
  <div class="container w-screen">
    <Navbar :search="search" />
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
  methods: {
    search () {
      console.log('parent')
    }
  }

}
</script>

<style>
  body {
    width: 100vw;
  }
  body {
    background: rgb(68,77,97);
    background: linear-gradient(90deg, rgba(68,77,97,1) 0%, rgba(21,27,45,1) 100%);
    @apply text-white;
  }
</style>
