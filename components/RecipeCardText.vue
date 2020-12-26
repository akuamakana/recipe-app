<template>
  <div class="p-4">
    <!-- Recipe Title -->
    <h1 class="mb-2 text-xl text-center uppercase font-bold">
      {{ recipe.title }}
    </h1>
    <!-- View Recipe Button -->
    <div class="flex justify-center mb-2">
      <button class="px-4 py-2 mt-2 rounded w-full text-white font-bold bg-gradient-to-r from-orange-400 to-red-500">
        View Recipe
      </button>
    </div>
    <div class="grid">
      <!-- Recipe Summary -->
      <div class="m-4">
        <h4 v-html="recipe.summary.slice(0,140).concat('...')" />
      </div>
      <!-- Recipe Details -->
      <div class="grid grid-cols-3 justify-between mb-2 divide-x text-gray-600 text-center uppercase">
        <div>
          <h3>Minutes</h3>
          <h3 class="text-black font-bold">
            {{ recipe.readyInMinutes }}
          </h3>
        </div>
        <div>
          <h3>Servings</h3>
          <h3 class="text-black font-bold">
            {{ recipe.servings }}
          </h3>
        </div>
        <div>
          <h3>Rating</h3>
          <h3 class="text-black font-bold">
            3/5
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recipe']
}
</script>
