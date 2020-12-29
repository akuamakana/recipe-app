<template>
  <div>
    <input v-model="searchBox" class="border rounded-lg p-2" type="text" placeholder="Search..." @keydown.enter="search(searchBox)">
  </div>
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
    ...mapActions({ search: 'search' })
  }
}
</script>
