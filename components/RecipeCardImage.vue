<template>
  <img class="object-contain rounded-t-lg" :src="recipe.image" alt="recipe.title">
</template>

<script>
export default {
  props: {
    recipe: Object
  }
}
</script>
