/* eslint-disable vue/require-prop-types */
<template>
  <div class="grid container w-full border shadow-lg">
    <RecipeCardImage :recipe="recipe" />
    <RecipeCardText :recipe="recipe" />
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

    }
  }
}
</script>
