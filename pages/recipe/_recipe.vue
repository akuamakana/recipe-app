<template>
  <div class="grid grid-rows-3 grid-cols-3 gap-4 p-16 h-screen overflow-hidden">
    <div class="grid grid-flow-row grid-rows-3 gap-8 row-span-3 col-span-2">
      <Header />
      <Steps />
    </div>
    <div class="row-span-3">
      <Ingredients />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '~/components/CurrentRecipe/Header'
import Steps from '~/components/CurrentRecipe/Steps'
import Ingredients from '~/components/CurrentRecipe/Ingredients'
export default {
  components: Header,
  Steps,
  Ingredients,
  mounted () {
    const id = this.$route.params.recipe
    this.getCurrentRecipe(id)
  },
  methods: {
    ...mapActions({ getCurrentRecipe: 'getCurrentRecipe' })
  }
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
