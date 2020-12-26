<template>
  <div>
    hello world
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.params.recipe)
  }
}
</script>
