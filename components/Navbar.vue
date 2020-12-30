<template>
  <div class=" w-screen flex justify-center p-2">
    <div class="flex w-3/4 justify-between items-center h-full">
      <div class="text-6xl text-white font-bold title">
        Recipes.
      </div>
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar'
export default {
  components: SearchBar
}
</script>

<style>
  .title {
    font-family: 'Playfair Display', serif;
  }
</style>
