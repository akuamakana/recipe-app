<template>
  <div class=" w-screen flex justify-center p-2">
    <div class="flex justify-between w-3/4 items-center">
      <div class="p-2 text-2xl text-white font-bold">
        Recipe App
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
