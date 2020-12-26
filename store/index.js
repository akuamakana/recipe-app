export const state = () => ({
  currentRecipes: [],
  currentRecipe: {}
})

const searchUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=6411032cc1b64ea0a7269e0da6e7fb58&query='

export const actions = {
  async search ({ commit }, query) {
    const recipes = await this.$axios.$get(`${searchUrl}${query}`)
    state.currentRecipes = recipes
  }
}
