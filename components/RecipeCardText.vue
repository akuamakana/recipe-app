<template>
  <div class="p-4 text-black flex flex-col justify-between">
    <!-- Recipe Title -->
    <h1 class="mb-2 text-xl text-center font-bold">
      {{ recipe.title }}
    </h1>
    <!-- View Recipe Button -->
    <div class="flex justify-center mb-2">
      <button type="submit" class="px-4 py-2 mt-2 rounded w-full font-bold border-2 border-black" @click="$emit('goToRecipe')">
        View Recipe
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object
  }
}
</script>
