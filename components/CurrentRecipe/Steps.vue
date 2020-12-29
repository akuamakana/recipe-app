<template>
  <div class="row-span-2 flex flex-col mt-12">
    <h1 class="text-5xl px-8 font-bold mb-2">
      Steps
    </h1>
    <div class="overflow-auto p-8">
      <div v-for="step in currentRecipe.analyzedInstructions[0].steps" :key="step.number" class="text-2xl leading-relaxed mb-6">
        <span class="text-yellow-600 uppercase">
          {{ step.number }}.
        </span>
        <span>
          {{ step.step }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['currentRecipe'])
}
</script>

<style scoped>
  ::-webkit-scrollbar {
    width: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #3C4354;
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #FCBE84;
    border-radius: 10px;
  }
</style>
