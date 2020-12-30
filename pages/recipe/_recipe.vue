<template>
  <div class="flex flex-col lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-4 lg:p-16 lg:h-screen lg:overflow-hidden">
    <div class="lg:grid lg:grid-flow-row lg:grid-rows-3 lg:gap-8 lg:row-span-3 lg:col-span-2">
      <Header />
      <Steps />
    </div>
    <div class="lg:row-span-3">
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
