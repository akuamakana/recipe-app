<template>
  <img class="object-cover" :src="recipe.image" alt="recipe.title">
</template>

<script>
export default {
  props: {
    recipe: Object
  }
}
</script>
