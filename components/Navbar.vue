<template>
  <div class="p-2 w-screen flex justify-center">
    <div class="flex w-full lg:w-3/4 justify-between items-center h-full px-8 lg:px-0">
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
