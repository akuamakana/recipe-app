<template>
  <div class="container w-screen">
    <Navbar :search="search" />
    <div class="flex justify-center w-screen">
      <div class="grid grid-cols-4 gap-4 w-3/4">
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
