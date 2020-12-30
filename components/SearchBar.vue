<template>
  <form class="flex" @submit.prevent>
    <input
      v-model="searchBox"
      type="search"
      class="rounded-lg p-4 text-black opacity-25 transition duration-300 ease-in-out focus:outline-none focus:opacity-100"
      placeholder="Search..."
      @keyup.enter="search(searchBox)"
    >
    <button @click="getRandomRecipes">
      Test
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      searchBox: ''
    }
  },
  methods: {
    ...mapActions({ search: 'search', getRandomRecipes: 'getRandomRecipes' })
  }
}
</script>
