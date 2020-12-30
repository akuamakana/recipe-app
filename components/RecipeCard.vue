/* eslint-disable vue/require-prop-types */
<template>
  <div class="lg:grid flex container w-full lg:rounded-lg shadow-lg bg-white">
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
      this.$router.push(`/recipe/${this.recipe.id}`)
    }
  }
}
</script>
