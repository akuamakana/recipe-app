<template>
  <input
    v-model="searchBox"
    type="search"
    class="rounded-lg p-4 text-black opacity-25 transition duration-300 ease-in-out focus:outline-none focus:opacity-100"
    placeholder="Search..."
    @keyup.enter="searchQuery(searchBox)"
  >
</template>

<script>
export default {
  data () {
    return {
      searchBox: ''
    }
  },
  methods: {
    searchQuery (query) {
      this.$router.push(`/search/${this.searchBox}`)
    }
  }
}
</script>
