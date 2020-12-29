/* eslint-disable vue/require-prop-types */
<template>
  <div class="grid container w-full rounded-lg shadow-lg bg-white">
    <RecipeCardImage :recipe="recipe" />
    <RecipeCardText :recipe="recipe" @goToRecipe="loadRecipe" />
  </div>
</template>

<script>
import RecipeCardImage from '~/components/RecipeCardImage'
import RecipeCardText from '~/components/RecipeCardText'
export default {
  components: RecipeCardImage,
  RecipeCardText,
  props: {
    recipe: Object
  },
  methods: {
    loadRecipe () {
      this.$store.state.currentRecipe = this.recipe
      this.$router.push(`/recipe/${this.recipe.id}`)
    }
  }
}
</script>
