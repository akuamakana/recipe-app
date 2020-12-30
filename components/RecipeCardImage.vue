<template>
  <img class="w-1/2 h-1/2 lg:w-auto lg:h-auto object-contain lg:rounded-t-lg" :src="recipe.image" alt="recipe.title">
</template>

<script>
export default {
  props: {
    recipe: Object
  }
}
</script>
