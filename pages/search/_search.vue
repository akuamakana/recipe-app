<template>
  <div class="container w-screen flex flex-col justify-center">
    <Navbar :search="search" />
    <div class="flex justify-center w-screen lg:w-screen">
      <div class="container grid w-full lg:grid-cols-4 gap-4 lg:w-3/4">
        <RecipeCard v-for="recipe in $store.state.currentRecipes.results" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '~/components/Navbar'
import RecipeCard from '~/components/RecipeCard'
export default {
  components: Navbar,
  RecipeCard,
  mounted () {
    const query = this.$route.params.search
    this.search(query)
  },
  methods: {
    ...mapActions({ search: 'search' })
  }
}
</script>
