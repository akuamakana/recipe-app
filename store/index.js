export const state = () => ({
  currentRecipes: {
    recipes: [
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 13,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 7,
        spoonacularScore: 74.0,
        healthScore: 28.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 242.04,
        extendedIngredients: [
          {
            id: 9003,
            aisle: 'Produce',
            image: 'apple.jpg',
            consistency: 'solid',
            name: 'apples',
            original: '4-6 fresh apples, quartered and cored (anything but Granny Smith)',
            originalString: '4-6 fresh apples, quartered and cored (anything but Granny Smith)',
            originalName: 'fresh apples, quartered and cored (anything but Granny Smith)',
            amount: 4.0,
            unit: '',
            meta: [
              'fresh',
              'cored',
              'quartered',
              '(anything but Granny Smith)'
            ],
            metaInformation: [
              'fresh',
              'cored',
              'quartered',
              '(anything but Granny Smith)'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 11282,
            aisle: 'Produce',
            image: 'brown-onion.png',
            consistency: 'solid',
            name: 'onions',
            original: '3 onions, peeled and cut into large chunks',
            originalString: '3 onions, peeled and cut into large chunks',
            originalName: 'onions, peeled and cut into large chunks',
            amount: 3.0,
            unit: '',
            meta: [
              'peeled',
              'cut into large chunks'
            ],
            metaInformation: [
              'peeled',
              'cut into large chunks'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 3.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic',
            original: '3 head garlic, broken into cloves, peeled',
            originalString: '3 head garlic, broken into cloves, peeled',
            originalName: 'garlic, broken into cloves, peeled',
            amount: 3.0,
            unit: 'head',
            meta: [
              'peeled'
            ],
            metaInformation: [
              'peeled'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: 'head',
                unitLong: 'heads'
              },
              metric: {
                amount: 3.0,
                unitShort: 'head',
                unitLong: 'heads'
              }
            }
          },
          {
            id: 2063,
            aisle: 'Produce',
            image: 'rosemary.jpg',
            consistency: 'solid',
            name: 'fresh rosemary',
            original: '8 sprigs fresh rosemary',
            originalString: '8 sprigs fresh rosemary',
            originalName: 'fresh rosemary',
            amount: 8.0,
            unit: 'sprigs',
            meta: [
              'fresh'
            ],
            metaInformation: [
              'fresh'
            ],
            measures: {
              us: {
                amount: 8.0,
                unitShort: 'sprigs',
                unitLong: 'sprigs'
              },
              metric: {
                amount: 8.0,
                unitShort: 'sprigs',
                unitLong: 'sprigs'
              }
            }
          },
          {
            id: 9150,
            aisle: 'Produce',
            image: 'lemon.png',
            consistency: 'solid',
            name: 'lemons',
            original: '4 lemons quartered (reserve one for garnish)',
            originalString: '4 lemons quartered (reserve one for garnish)',
            originalName: 'lemons quartered (reserve one for garnish)',
            amount: 4.0,
            unit: '',
            meta: [
              'quartered',
              'for garnish)'
            ],
            metaInformation: [
              'quartered',
              'for garnish)'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 2069,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'balsamic-vinegar.jpg',
            consistency: 'liquid',
            name: 'balsamic vinegar',
            original: '1/2 cup Raimondo Sicilian Lemon Balsamic Vinegar',
            originalString: '1/2 cup Raimondo Sicilian Lemon Balsamic Vinegar',
            originalName: 'Raimondo Sicilian Lemon Balsamic Vinegar',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1012034,
            aisle: 'Spices and Seasonings',
            image: 'seasoning.png',
            consistency: 'solid',
            name: 'dry seasoning rub',
            original: 'Seasoning - make a rub with the following - garlic powder, salt, pepper and thyme.',
            originalString: 'Seasoning - make a rub with the following - garlic powder, salt, pepper and thyme.',
            originalName: 'Seasoning - make a rub with the following - garlic powder, salt, pepper and thyme',
            amount: 1.0,
            unit: 'serving',
            meta: [
              'with the following - garlic powder, salt, pepper and thyme.'
            ],
            metaInformation: [
              'with the following - garlic powder, salt, pepper and thyme.'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 5109,
            aisle: 'Meat',
            image: 'whole-chicken.jpg',
            consistency: 'solid',
            name: 'roasting chickens',
            original: '2 roasting chickens',
            originalString: '2 roasting chickens',
            originalName: 'roasting chickens',
            amount: 2.0,
            unit: '',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 2.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 1006615,
            aisle: 'Canned and Jarred',
            image: 'chicken-broth.png',
            consistency: 'liquid',
            name: 'stock',
            original: '1 can of stock (chicken or veggie)',
            originalString: '1 can of stock (chicken or veggie)',
            originalName: 'stock (chicken or veggie)',
            amount: 1.0,
            unit: 'can',
            meta: [
              '(chicken or veggie)'
            ],
            metaInformation: [
              '(chicken or veggie)'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'can',
                unitLong: 'can'
              },
              metric: {
                amount: 1.0,
                unitShort: 'can',
                unitLong: 'can'
              }
            }
          }
        ],
        id: 658418,
        title: 'Roast Chicken with Apples and Rosemary',
        readyInMinutes: 45,
        servings: 8,
        sourceUrl: 'https://www.foodista.com/recipe/PH5S6625/roast-chicken-with-apples-and-rosemary',
        image: 'https://spoonacular.com/recipeImages/658418-556x370.jpg',
        imageType: 'jpg',
        summary: 'Need a <b>gluten free, dairy free, paleolithic, and primal main course</b>? Roast Chicken with Apples and Rosemary could be a spectacular recipe to try. This recipe serves 8. For <b>$2.42 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains about <b>35g of protein</b>, <b>30g of fat</b>, and a total of <b>519 calories</b>. This recipe from Foodista has 6 fans. If you have roasting chickens, onions, rosemary, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 75%</b>. Try <a href="https://spoonacular.com/recipes/roast-pork-with-apples-cider-vinegar-rosemary-220626">Roast pork with apples, cider vinegar & rosemary</a>, <a href="https://spoonacular.com/recipes/baked-rosemary-chicken-with-apples-709032">Baked Rosemary Chicken with Apples</a>, and <a href="https://spoonacular.com/recipes/roast-chicken-with-sweet-potatoes-and-apples-205278">Roast Chicken with Sweet Potatoes and Apples</a> for similar recipes.',
        cuisines: [],
        dishTypes: [
          'lunch',
          'main course',
          'main dish',
          'dinner'
        ],
        diets: [
          'gluten free',
          'dairy free',
          'paleolithic',
          'primal'
        ],
        occasions: [],
        instructions: 'Preheat oven to 400 degrees.  Position a rack in the lower third of the oven.  Rinse the chicken, then dry it very well with paper towels, inside and out.\nPlace apples, rosemary, 3 lemons, onions, and garlic in a single layer in shallow roasting pan. Season with salt and pepper. Toss well and pour in the vinegar. Season the chicken well with the rub and place breast-side-up on top of the veggies and fruits. Put the rest of the veggies and fruit in the cavity of the chicken.\nRoast for 30 minutes, until the breast is firm and just beginning to brown in spots. Using tongs, turn the chicken breast-down and roast for 20 minutes longer, until the skin is lightly browned and the thermometer registers 175 to 180.\nTilt the chicken to drain the cavity juices into the pan and remove the goodies from the inside and bottom of pan.  Now transfer the bird to a cutting board. Remove the rack from the pan and spoon off the fat. Set the pan over high heat. Add the stock and cook, scraping up any browned bits and leftover pieces of goodies. Squeeze the last lemon to release the juices. Carve the chicken and pass the chunky jus at the table.',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Preheat oven to 400 degrees.  Position a rack in the lower third of the oven.  Rinse the chicken, then dry it very well with paper towels, inside and out.',
                ingredients: [
                  {
                    id: 5006,
                    name: 'whole chicken',
                    localizedName: 'whole chicken',
                    image: 'whole-chicken.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 405895,
                    name: 'paper towels',
                    localizedName: 'paper towels',
                    image: 'paper-towels.jpg'
                  },
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Place apples, rosemary, 3 lemons, onions, and garlic in a single layer in shallow roasting pan. Season with salt and pepper. Toss well and pour in the vinegar. Season the chicken well with the rub and place breast-side-up on top of the veggies and fruits.',
                ingredients: [
                  {
                    id: 1102047,
                    name: 'salt and pepper',
                    localizedName: 'salt and pepper',
                    image: 'salt-and-pepper.jpg'
                  },
                  {
                    id: 2036,
                    name: 'rosemary',
                    localizedName: 'rosemary',
                    image: 'rosemary.jpg'
                  },
                  {
                    id: 5006,
                    name: 'whole chicken',
                    localizedName: 'whole chicken',
                    image: 'whole-chicken.jpg'
                  },
                  {
                    id: 2053,
                    name: 'vinegar',
                    localizedName: 'vinegar',
                    image: 'vinegar-(white).jpg'
                  },
                  {
                    id: 9003,
                    name: 'apple',
                    localizedName: 'apple',
                    image: 'apple.jpg'
                  },
                  {
                    id: 9431,
                    name: 'fruit',
                    localizedName: 'fruit',
                    image: 'mixed-fresh-fruit.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  },
                  {
                    id: 9150,
                    name: 'lemon',
                    localizedName: 'lemon',
                    image: 'lemon.png'
                  },
                  {
                    id: 11282,
                    name: 'onion',
                    localizedName: 'onion',
                    image: 'brown-onion.png'
                  },
                  {
                    id: 1012034,
                    name: 'dry seasoning rub',
                    localizedName: 'dry seasoning rub',
                    image: 'seasoning.png'
                  }
                ],
                equipment: [
                  {
                    id: 404629,
                    name: 'roasting pan',
                    localizedName: 'roasting pan',
                    image: 'roasting-pan.jpg'
                  }
                ]
              },
              {
                number: 3,
                step: 'Put the rest of the veggies and fruit in the cavity of the chicken.',
                ingredients: [
                  {
                    id: 5006,
                    name: 'whole chicken',
                    localizedName: 'whole chicken',
                    image: 'whole-chicken.jpg'
                  },
                  {
                    id: 9431,
                    name: 'fruit',
                    localizedName: 'fruit',
                    image: 'mixed-fresh-fruit.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 4,
                step: 'Roast for 30 minutes, until the breast is firm and just beginning to brown in spots. Using tongs, turn the chicken breast-down and roast for 20 minutes longer, until the skin is lightly browned and the thermometer registers 175 to 18',
                ingredients: [
                  {
                    id: 5062,
                    name: 'chicken breast',
                    localizedName: 'chicken breast',
                    image: 'chicken-breasts.png'
                  }
                ],
                equipment: [
                  {
                    id: 404789,
                    name: 'kitchen thermometer',
                    localizedName: 'kitchen thermometer',
                    image: 'food-thermometer.jpg'
                  },
                  {
                    id: 404641,
                    name: 'tongs',
                    localizedName: 'tongs',
                    image: 'tongs.jpg'
                  }
                ],
                length: {
                  number: 50,
                  unit: 'minutes'
                }
              },
              {
                number: 5,
                step: 'Tilt the chicken to drain the cavity juices into the pan and remove the goodies from the inside and bottom of pan.  Now transfer the bird to a cutting board.',
                ingredients: [
                  {
                    id: 5006,
                    name: 'whole chicken',
                    localizedName: 'whole chicken',
                    image: 'whole-chicken.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404716,
                    name: 'cutting board',
                    localizedName: 'cutting board',
                    image: 'cutting-board.jpg'
                  },
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 6,
                step: 'Remove the rack from the pan and spoon off the fat. Set the pan over high heat.',
                ingredients: [],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 7,
                step: 'Add the stock and cook, scraping up any browned bits and leftover pieces of goodies. Squeeze the last lemon to release the juices. Carve the chicken and pass the chunky jus at the table.',
                ingredients: [
                  {
                    id: 5006,
                    name: 'whole chicken',
                    localizedName: 'whole chicken',
                    image: 'whole-chicken.jpg'
                  },
                  {
                    id: 9150,
                    name: 'lemon',
                    localizedName: 'lemon',
                    image: 'lemon.png'
                  },
                  {
                    id: 1006615,
                    name: 'stock',
                    localizedName: 'stock',
                    image: 'chicken-broth.png'
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/roast-chicken-with-apples-and-rosemary-658418'
      },
      {
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: true,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 8,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 11,
        spoonacularScore: 96.0,
        healthScore: 100.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 126.27,
        extendedIngredients: [
          {
            id: 4053,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'olive-oil.jpg',
            consistency: 'liquid',
            name: 'olive oil',
            original: '2 Tbs olive oil',
            originalString: '2 Tbs olive oil',
            originalName: 'olive oil',
            amount: 2.0,
            unit: 'Tbs',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbs',
                unitLong: 'Tbs'
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbs',
                unitLong: 'Tbs'
              }
            }
          },
          {
            id: 11282,
            aisle: 'Produce',
            image: 'brown-onion.png',
            consistency: 'solid',
            name: 'onion',
            original: '1 onion, chopped',
            originalString: '1 onion, chopped',
            originalName: 'onion, chopped',
            amount: 1.0,
            unit: '',
            meta: [
              'chopped'
            ],
            metaInformation: [
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic',
            original: '2 cloves garlic, minced',
            originalString: '2 cloves garlic, minced',
            originalName: 'garlic, minced',
            amount: 2.0,
            unit: 'cloves',
            meta: [
              'minced'
            ],
            metaInformation: [
              'minced'
            ],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'cloves',
                unitLong: 'cloves'
              },
              metric: {
                amount: 2.0,
                unitShort: 'cloves',
                unitLong: 'cloves'
              }
            }
          },
          {
            id: 11124,
            aisle: 'Produce',
            image: 'sliced-carrot.png',
            consistency: 'solid',
            name: 'carrots',
            original: '3 carrots cut into cubes',
            originalString: '3 carrots cut into cubes',
            originalName: 'carrots cut into cubes',
            amount: 3.0,
            unit: '',
            meta: [
              'cut into cubes'
            ],
            metaInformation: [
              'cut into cubes'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 3.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 10011693,
            aisle: 'Canned and Jarred',
            image: 'tomatoes-canned.png',
            consistency: 'solid',
            name: 'canned tomatoes',
            original: '480g canned chopped tomatoes',
            originalString: '480g canned chopped tomatoes',
            originalName: 'canned chopped tomatoes',
            amount: 480.0,
            unit: 'g',
            meta: [
              'canned',
              'chopped'
            ],
            metaInformation: [
              'canned',
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.058,
                unitShort: 'lb',
                unitLong: 'pounds'
              },
              metric: {
                amount: 480.0,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 2004,
            aisle: 'Spices and Seasonings',
            image: 'bay-leaves.jpg',
            consistency: 'solid',
            name: 'bay leaf',
            original: '1 bay leaf',
            originalString: '1 bay leaf',
            originalName: 'bay leaf',
            amount: 1.0,
            unit: '',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 14412,
            aisle: 'Beverages',
            image: 'water.png',
            consistency: 'liquid',
            name: 'water',
            original: '1.3 l water',
            originalString: '1.3 l water',
            originalName: 'water',
            amount: 1.3,
            unit: 'l',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.374,
                unitShort: 'qt',
                unitLong: 'quarts'
              },
              metric: {
                amount: 1.3,
                unitShort: 'l',
                unitLong: 'liters'
              }
            }
          },
          {
            id: 16069,
            aisle: 'Pasta and Rice;Canned and Jarred;Produce',
            image: 'lentils-green.jpg',
            consistency: 'solid',
            name: 'lentils',
            original: '250 g lentils',
            originalString: '250 g lentils',
            originalName: 'lentils',
            amount: 250.0,
            unit: 'g',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 8.818,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 250.0,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 2047,
            aisle: 'Spices and Seasonings',
            image: 'salt.jpg',
            consistency: 'solid',
            name: 'salt',
            original: '¼ tsp salt',
            originalString: '¼ tsp salt',
            originalName: 'salt',
            amount: 0.25,
            unit: 'tsp',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 11297,
            aisle: 'Produce;Spices and Seasonings',
            image: 'parsley.jpg',
            consistency: 'solid',
            name: 'parsley',
            original: '1 bunch chopped parsley',
            originalString: '1 bunch chopped parsley',
            originalName: 'chopped parsley',
            amount: 1.0,
            unit: 'bunch',
            meta: [
              'chopped'
            ],
            metaInformation: [
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'bunch',
                unitLong: 'bunch'
              },
              metric: {
                amount: 1.0,
                unitShort: 'bunch',
                unitLong: 'bunch'
              }
            }
          }
        ],
        id: 663559,
        title: 'Tomato and lentil soup',
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: 'https://www.foodista.com/recipe/5V4PTMT2/tomato-and-lentil-soup',
        image: 'https://spoonacular.com/recipeImages/663559-556x370.jpg',
        imageType: 'jpg',
        summary: 'Tomato and lentil soup takes about <b>about 45 minutes</b> from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>358 calories</b>, <b>19g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 4 and costs $1.26 per serving. 11 person were impressed by this recipe. It works well as an affordable main course for <b>Autumn</b>. A mixture of carrots, bay leaf, parsley, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 97%</b>, which is super. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/lentil-tomato-soup-108370">Lentil & Tomato Soup</a>, <a href="https://spoonacular.com/recipes/lentil-tomato-soup-398380">Lentil-Tomato Soup</a>, and <a href="https://spoonacular.com/recipes/tomato-and-lentil-soup-482854">Tomato and Lentil Soup</a>.',
        cuisines: [],
        dishTypes: [
          'lunch',
          'soup',
          'main course',
          'main dish',
          'dinner'
        ],
        diets: [
          'gluten free',
          'dairy free',
          'lacto ovo vegetarian',
          'vegan'
        ],
        occasions: [
          'fall',
          'winter'
        ],
        instructions: 'Saut onion and garlic in olive oil for 5 minutes.\nAdd the carrot, saut for another 2 minutes.\nAdd tomatoes, bay leaf and water, stir and bring to the boil.\nStir in lentils, season with salt and cook for 5 minutes.\nBefore serving sprinkle with chopped parsley.',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Saut onion and garlic in olive oil for 5 minutes.',
                ingredients: [
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  },
                  {
                    id: 11282,
                    name: 'onion',
                    localizedName: 'onion',
                    image: 'brown-onion.png'
                  }
                ],
                equipment: [],
                length: {
                  number: 5,
                  unit: 'minutes'
                }
              },
              {
                number: 2,
                step: 'Add the carrot, saut for another 2 minutes.',
                ingredients: [
                  {
                    id: 11124,
                    name: 'carrot',
                    localizedName: 'carrot',
                    image: 'sliced-carrot.png'
                  }
                ],
                equipment: [],
                length: {
                  number: 2,
                  unit: 'minutes'
                }
              },
              {
                number: 3,
                step: 'Add tomatoes, bay leaf and water, stir and bring to the boil.',
                ingredients: [
                  {
                    id: 2004,
                    name: 'bay leaves',
                    localizedName: 'bay leaves',
                    image: 'bay-leaves.jpg'
                  },
                  {
                    id: 11529,
                    name: 'tomato',
                    localizedName: 'tomato',
                    image: 'tomato.png'
                  },
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  }
                ],
                equipment: []
              },
              {
                number: 4,
                step: 'Stir in lentils, season with salt and cook for 5 minutes.',
                ingredients: [
                  {
                    id: 10316069,
                    name: 'lentils',
                    localizedName: 'lentils',
                    image: 'lentils-brown.jpg'
                  },
                  {
                    id: 2047,
                    name: 'salt',
                    localizedName: 'salt',
                    image: 'salt.jpg'
                  }
                ],
                equipment: [],
                length: {
                  number: 5,
                  unit: 'minutes'
                }
              },
              {
                number: 5,
                step: 'Before serving sprinkle with chopped parsley.',
                ingredients: [
                  {
                    id: 11297,
                    name: 'parsley',
                    localizedName: 'parsley',
                    image: 'parsley.jpg'
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/tomato-and-lentil-soup-663559'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 1,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 6,
        spoonacularScore: 10.0,
        healthScore: 0.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 26.09,
        extendedIngredients: [
          {
            id: 1006,
            aisle: 'Cheese',
            image: 'brie.jpg',
            consistency: 'solid',
            name: 'brie',
            original: '1 package (5 oz.) Alouette Crème de Brie, Original, at room temperature',
            originalString: '1 package (5 oz.) Alouette Crème de Brie, Original, at room temperature',
            originalName: 'package Alouette Crème de Brie, Original, at room temperature',
            amount: 5.0,
            unit: 'oz',
            meta: [
              'at room temperature'
            ],
            metaInformation: [
              'at room temperature'
            ],
            measures: {
              us: {
                amount: 5.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 141.748,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 11156,
            aisle: 'Produce',
            image: 'fresh-chives.jpg',
            consistency: 'solid',
            name: 'chives',
            original: '1 tablespoon chopped chives',
            originalString: '1 tablespoon chopped chives',
            originalName: 'chopped chives',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [
              'chopped'
            ],
            metaInformation: [
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 1034053,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'olive-oil.jpg',
            consistency: 'liquid',
            name: 'extra virgin olive oil',
            original: '2 tablespoons extra virgin olive oil',
            originalString: '2 tablespoons extra virgin olive oil',
            originalName: 'extra virgin olive oil',
            amount: 2.0,
            unit: 'tablespoons',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic',
            original: '1/8 teaspoon garlic, finely minced',
            originalString: '1/8 teaspoon garlic, finely minced',
            originalName: 'garlic, finely minced',
            amount: 0.125,
            unit: 'teaspoon',
            meta: [
              'finely minced'
            ],
            metaInformation: [
              'finely minced'
            ],
            measures: {
              us: {
                amount: 0.125,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.125,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 9206,
            aisle: 'Beverages',
            image: 'orange-juice.jpg',
            consistency: 'liquid',
            name: 'orange juice',
            original: '1 tablespoon orange juice',
            originalString: '1 tablespoon orange juice',
            originalName: 'orange juice',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 9216,
            aisle: 'Produce',
            image: 'orange-zest.png',
            consistency: 'solid',
            name: 'orange peel',
            original: '1/2 teaspoon grated orange peel',
            originalString: '1/2 teaspoon grated orange peel',
            originalName: 'grated orange peel',
            amount: 0.5,
            unit: 'teaspoon',
            meta: [
              'grated'
            ],
            metaInformation: [
              'grated'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 93817,
            aisle: 'Refrigerated;Frozen',
            image: 'mini-phyllo-shells.png',
            consistency: 'solid',
            name: 'phyllo shells',
            original: '2 packages (2.1 oz each) frozen phyllo tartlet shells',
            originalString: '2 packages (2.1 oz each) frozen phyllo tartlet shells',
            originalName: 'packages each) frozen phyllo tartlet shells',
            amount: 4.2,
            unit: 'oz',
            meta: [
              'frozen'
            ],
            metaInformation: [
              'frozen'
            ],
            measures: {
              us: {
                amount: 4.2,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 119.068,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1032009,
            aisle: 'Spices and Seasonings',
            image: 'red-pepper-flakes.jpg',
            consistency: 'solid',
            name: 'red pepper flakes',
            original: '1/4 teaspoon crushed red pepper flakes',
            originalString: '1/4 teaspoon crushed red pepper flakes',
            originalName: 'crushed red pepper flakes',
            amount: 0.25,
            unit: 'teaspoon',
            meta: [
              'red',
              'crushed'
            ],
            metaInformation: [
              'red',
              'crushed'
            ],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          }
        ],
        id: 632241,
        title: 'Alouette Crème De Brie Shrimp Cups',
        readyInMinutes: 45,
        servings: 30,
        sourceUrl: 'http://www.foodista.com/recipe/TMXCHQZ8/alouette-creme-de-brie-shrimp-cups',
        image: 'https://spoonacular.com/recipeImages/632241-556x370.jpg',
        imageType: 'jpg',
        summary: 'This recipe makes 30 servings with <b>38 calories</b>, <b>2g of protein</b>, and <b>3g of fat</b> each. For <b>26 cents per serving</b>, this recipe <b>covers 1%</b> of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 6 would say it hit the spot. Head to the store and pick up orange peel, pepper flakes, extra virgin olive oil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 12%</b>. This score is rather bad. Try <a href="https://spoonacular.com/recipes/gluten-free-crme-de-brie-champagne-and-crab-gratin-alouette-cheese-and-the-adventures-of-tintin-sweepstakes-and-a-giveaway-512216">Gluten Free Crème de Brie Champagne and Crab Gratin, Alouette Cheese and The Adventures of Tintin Sweepstakes (and a Giveaway!)</a>, <a href="https://spoonacular.com/recipes/alouette-cranberry-brie-632253">Alouette® Cranberry Brie</a>, and <a href="https://spoonacular.com/recipes/alouette-brandied-apricot-baby-brie-124792">Alouette Brandied Apricot Baby Brie</a> for similar recipes.',
        cuisines: [],
        dishTypes: [
          'antipasti',
          'starter',
          'snack',
          'appetizer',
          'antipasto',
          "hor d'oeuvre"
        ],
        diets: [],
        occasions: [],
        instructions: '<ol><li>Arrange tartlet shells on 2 serving plates. Spoon a scant teaspoon Alouette Crme de Brie in each.</li><li>In medium bowl, combine shrimp and all remaining ingredients. Toss to coat shrimp.</li><li>Place 1 shrimp over cheese in each shell. Spoon a little orange juice-chive mixture over shrimp. Serve immediately.</li><li>Variation:</li><li>For a slightly salty flavor, substitute 30 cup-shaped tortilla chips for the phyllo tartlet shells.</li><li>If using phyllo tartlet shells, these can be served cold or warm (warm for 5 minutes at 350 F).</li></ol>',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Arrange tartlet shells on 2 serving plates. Spoon a scant teaspoon Alouette Crme de Brie in each.In medium bowl, combine shrimp and all remaining ingredients. Toss to coat shrimp.',
                ingredients: [
                  {
                    id: 10098852,
                    name: 'tartlet shells',
                    localizedName: 'tartlet shells',
                    image: 'tartlet-shells.jpg'
                  },
                  {
                    id: 15152,
                    name: 'shrimp',
                    localizedName: 'shrimp',
                    image: 'shrimp.png'
                  },
                  {
                    id: 1006,
                    name: 'brie',
                    localizedName: 'brie',
                    image: 'brie.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Place 1 shrimp over cheese in each shell. Spoon a little orange juice-chive mixture over shrimp.',
                ingredients: [
                  {
                    id: 9206,
                    name: 'orange juice',
                    localizedName: 'orange juice',
                    image: 'orange-juice.jpg'
                  },
                  {
                    id: 1041009,
                    name: 'cheese',
                    localizedName: 'cheese',
                    image: 'cheddar-cheese.png'
                  },
                  {
                    id: 15152,
                    name: 'shrimp',
                    localizedName: 'shrimp',
                    image: 'shrimp.png'
                  },
                  {
                    id: 11156,
                    name: 'chives',
                    localizedName: 'chives',
                    image: 'fresh-chives.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 3,
                step: 'Serve immediately.Variation:For a slightly salty flavor, substitute 30 cup-shaped tortilla chips for the phyllo tartlet shells.If using phyllo tartlet shells, these can be served cold or warm (warm for 5 minutes at 350 F).',
                ingredients: [
                  {
                    id: 10098852,
                    name: 'tartlet shells',
                    localizedName: 'tartlet shells',
                    image: 'tartlet-shells.jpg'
                  },
                  {
                    id: 19056,
                    name: 'tortilla chips',
                    localizedName: 'tortilla chips',
                    image: 'tortilla-chips.jpg'
                  }
                ],
                equipment: [],
                length: {
                  number: 5,
                  unit: 'minutes'
                }
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/alouette-crme-de-brie-shrimp-cups-632241'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 18,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 6,
        spoonacularScore: 64.0,
        healthScore: 17.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 191.28,
        extendedIngredients: [
          {
            id: 20081,
            aisle: 'Baking',
            image: 'flour.png',
            consistency: 'solid',
            name: 'all purpose flour',
            original: '2 cups of All Purpose Flour',
            originalString: '2 cups of All Purpose Flour',
            originalName: 'All Purpose Flour',
            amount: 2.0,
            unit: 'cups',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 473.176,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            original: '1 tablespoon of Butter',
            originalString: '1 tablespoon of Butter',
            originalName: 'Butter',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            original: '4 tablespoons of Butter',
            originalString: '4 tablespoons of Butter',
            originalName: 'Butter',
            amount: 4.0,
            unit: 'tablespoons',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 4.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 1123,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg.png',
            consistency: 'solid',
            name: 'eggs',
            original: '3 Large Eggs',
            originalString: '3 Large Eggs',
            originalName: 'Large Eggs',
            amount: 3.0,
            unit: '',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 3.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 3.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 2044,
            aisle: 'Produce',
            image: 'fresh-basil.jpg',
            consistency: 'solid',
            name: 'fresh basil',
            original: '1 bunch of Fresh Basil, Chopped',
            originalString: '1 bunch of Fresh Basil, Chopped',
            originalName: 'Fresh Basil, Chopped',
            amount: 1.0,
            unit: 'bunch',
            meta: [
              'fresh',
              'chopped'
            ],
            metaInformation: [
              'fresh',
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'bunch',
                unitLong: 'bunch'
              },
              metric: {
                amount: 1.0,
                unitShort: 'bunch',
                unitLong: 'bunch'
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic',
            original: '2 cloves of Garlic',
            originalString: '2 cloves of Garlic',
            originalName: 'Garlic',
            amount: 2.0,
            unit: 'cloves',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'cloves',
                unitLong: 'cloves'
              },
              metric: {
                amount: 2.0,
                unitShort: 'cloves',
                unitLong: 'cloves'
              }
            }
          },
          {
            id: 11260,
            aisle: 'Produce',
            image: 'mushrooms.png',
            consistency: 'solid',
            name: 'mushrooms',
            original: '5 ounces Mushrooms, Diced',
            originalString: '5 ounces Mushrooms, Diced',
            originalName: 'Mushrooms, Diced',
            amount: 5.0,
            unit: 'ounces',
            meta: [
              'diced'
            ],
            metaInformation: [
              'diced'
            ],
            measures: {
              us: {
                amount: 5.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 141.748,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 11282,
            aisle: 'Produce',
            image: 'brown-onion.png',
            consistency: 'solid',
            name: 'onion',
            original: '1/2 Onion, Diced',
            originalString: '1/2 Onion, Diced',
            originalName: 'Onion, Diced',
            amount: 0.5,
            unit: '',
            meta: [
              'diced'
            ],
            metaInformation: [
              'diced'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 0.5,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 2027,
            aisle: 'Produce;Spices and Seasonings',
            image: 'oregano.jpg',
            consistency: 'solid',
            name: 'oregano',
            original: '1 teaspoon of Oregano',
            originalString: '1 teaspoon of Oregano',
            originalName: 'Oregano',
            amount: 1.0,
            unit: 'teaspoon',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              },
              metric: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              }
            }
          },
          {
            id: 10010123,
            aisle: 'Meat',
            image: 'proscuitto.jpg',
            consistency: 'solid',
            name: 'prosciutto',
            original: '4 ounces prosciutto, thinly sliced',
            originalString: '4 ounces prosciutto, thinly sliced',
            originalName: 'prosciutto, thinly sliced',
            amount: 4.0,
            unit: 'ounces',
            meta: [
              'thinly sliced'
            ],
            metaInformation: [
              'thinly sliced'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 113.398,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 2047,
            aisle: 'Spices and Seasonings',
            image: 'salt.jpg',
            consistency: 'solid',
            name: 'salt',
            original: '1/8 teaspoon Salt',
            originalString: '1/8 teaspoon Salt',
            originalName: 'Salt',
            amount: 0.125,
            unit: 'teaspoon',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.125,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.125,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 10011457,
            aisle: 'Produce',
            image: 'spinach.jpg',
            consistency: 'solid',
            name: 'spinach',
            original: '3 ounces Fresh Spinach',
            originalString: '3 ounces Fresh Spinach',
            originalName: 'Fresh Spinach',
            amount: 3.0,
            unit: 'ounces',
            meta: [
              'fresh'
            ],
            metaInformation: [
              'fresh'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 85.049,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          }
        ],
        id: 657159,
        title: 'Prosciutto and Mushroom Ravioli With Basil Browned Butter Sauce',
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: 'http://www.foodista.com/recipe/FM8XPRRP/prosciutto-and-mushroom-ravioli-with-basil-browned-butter-sauce',
        image: 'https://spoonacular.com/recipeImages/657159-556x370.jpg',
        imageType: 'jpg',
        summary: 'The recipe Prosciutto and Mushroom Ravioli With Basil Browned Butter Sauce could satisfy your Mediterranean craving in around <b>45 minutes</b>. This recipe serves 4 and costs $1.91 per serving. This main course has <b>541 calories</b>, <b>16g of protein</b>, and <b>29g of fat</b> per serving. If you have mushrooms, butter, garlic, and a few other ingredients on hand, you can make it. To use up the onion you could follow this main course with the <a href="https://spoonacular.com/recipes/candy-corn-cupcakes-63881">Candy Corn Cupcakes</a> as a dessert. 5 people were impressed by this recipe. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/browned-butter-mushroom-ravioli-with-sage-574170">Browned Butter Mushroom Ravioli with Sage</a>, <a href="https://spoonacular.com/recipes/pumpkin-ravioli-with-browned-butter-sage-sauce-657377">Pumpkin Ravioli With Browned Butter Sage Sauce</a>, and <a href="https://spoonacular.com/recipes/herbed-veggie-risotto-with-browned-butter-mushroom-sauce-triplesbites-628556">Herbed Veggie Risotto with Browned Butter Mushroom Sauce #TripleSBites</a> for similar recipes.',
        cuisines: [
          'Mediterranean',
          'Italian',
          'European'
        ],
        dishTypes: [
          'lunch',
          'main course',
          'main dish',
          'dinner'
        ],
        diets: [],
        occasions: [],
        instructions: "<ol><li>We'll start out by making the dough for our ravioli. Add to a food processor all of your ravioli ingredients.</li><li>Run the processor and mix the ingredients up well. If the dough looks like pebbles, it's a touch too dry. Add about 1/2-1 tsp of water and mix again. It should form a nice ball of dough. Once your dough is mixed, bring it out of the processor and knead it for a few minutes.</li><li>Cover your ball of pasta dough with plastic wrap and let it rest for a good twenty minutes.</li><li>While your dough is resting, let's whip up the tasty filling. Grab your skillet and heat up the butter on medium heat. Now add in the garlic.</li><li>Next we'll add in the proscuitto, onions and mushrooms.</li><li>Let it cook up for a minute or two and then add in the salt and oregano. Give it a swirl or two around the pan to mix in and then add in your spinach.</li><li>Let the spinach wilt down completely and then remove the mixture from the heat.</li><li>Now it's time to grab your well rested pasta dough and pop out some ravioli.</li><li>Rip off about a sixth of the ball and run it through your pasta maker (or hand roll it) to the desired thinness.</li><li>If you have a ravioli cutter you can use that, or you can use a glass to cut circles, or you can do like we did and use a cookie cutter to make fun shapes celebrating the holiday.</li><li>After you have your ravioli cut out, you'll drop a good teaspoonful of the prosciutto mixture into the center of the pasta.</li><li>Brush the edges with an egg wash (the egg white from one egg) and place another pasta piece over the top. Seal the edges with your fingers, a fork, or whatever puts a smile on your face.</li><li>Grab a pot, fill it up with water and set it to boil. The pasta will cook up quick (it will float when cooked)</li><li>Grab another pan, drop the butter into it and cook it on medium until it turns a beautiful golden brown and gives off a lovely nutty smell. At this point you'll turn the heat down just a notch and add in your garlic.</li><li>Now drop in your chopped basil, give it a swirl or two to let the basil wilt and your butter sauce is ready to rumble.</li><li>Drain your cooked up ravioli, dump them in the butter sauce and get them good and coated.</li><li>Serve them up with a little grated Parmesan or Romano over the top.</li></ol>",
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: "We'll start out by making the dough for our ravioli.",
                ingredients: [
                  {
                    id: 93832,
                    name: 'ravioli',
                    localizedName: 'ravioli',
                    image: 'ravioli.png'
                  },
                  {
                    id: 0,
                    name: 'dough',
                    localizedName: 'dough',
                    image: 'pizza-dough'
                  }
                ],
                equipment: []
              },
              {
                number: 2,
                step: "Add to a food processor all of your ravioli ingredients.Run the processor and mix the ingredients up well. If the dough looks like pebbles, it's a touch too dry.",
                ingredients: [
                  {
                    id: 93832,
                    name: 'ravioli',
                    localizedName: 'ravioli',
                    image: 'ravioli.png'
                  },
                  {
                    id: 0,
                    name: 'dough',
                    localizedName: 'dough',
                    image: 'pizza-dough'
                  }
                ],
                equipment: [
                  {
                    id: 404771,
                    name: 'food processor',
                    localizedName: 'food processor',
                    image: 'food-processor.png'
                  }
                ]
              },
              {
                number: 3,
                step: "Add about 1/2-1 tsp of water and mix again. It should form a nice ball of dough. Once your dough is mixed, bring it out of the processor and knead it for a few minutes.Cover your ball of pasta dough with plastic wrap and let it rest for a good twenty minutes.While your dough is resting, let's whip up the tasty filling. Grab your skillet and heat up the butter on medium heat. Now add in the garlic.Next we'll add in the proscuitto, onions and mushrooms.",
                ingredients: [
                  {
                    id: 10118334,
                    name: 'pasta dough',
                    localizedName: 'pasta dough',
                    image: 'dough.jpg'
                  },
                  {
                    id: 10010123,
                    name: 'prosciutto',
                    localizedName: 'prosciutto',
                    image: 'proscuitto.jpg'
                  },
                  {
                    id: 11260,
                    name: 'mushrooms',
                    localizedName: 'mushrooms',
                    image: 'mushrooms.png'
                  },
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  },
                  {
                    id: 11282,
                    name: 'onion',
                    localizedName: 'onion',
                    image: 'brown-onion.png'
                  },
                  {
                    id: 0,
                    name: 'dough',
                    localizedName: 'dough',
                    image: 'pizza-dough'
                  },
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  },
                  {
                    id: 10018364,
                    name: 'wrap',
                    localizedName: 'wrap',
                    image: 'flour-tortilla.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404730,
                    name: 'plastic wrap',
                    localizedName: 'plastic wrap',
                    image: 'plastic-wrap.jpg'
                  },
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ],
                length: {
                  number: 20,
                  unit: 'minutes'
                }
              },
              {
                number: 4,
                step: 'Let it cook up for a minute or two and then add in the salt and oregano. Give it a swirl or two around the pan to mix in and then add in your spinach.',
                ingredients: [
                  {
                    id: 2027,
                    name: 'oregano',
                    localizedName: 'oregano',
                    image: 'oregano.jpg'
                  },
                  {
                    id: 10011457,
                    name: 'spinach',
                    localizedName: 'spinach',
                    image: 'spinach.jpg'
                  },
                  {
                    id: 2047,
                    name: 'salt',
                    localizedName: 'salt',
                    image: 'salt.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 5,
                step: "Let the spinach wilt down completely and then remove the mixture from the heat.Now it's time to grab your well rested pasta dough and pop out some ravioli.Rip off about a sixth of the ball and run it through your pasta maker (or hand roll it) to the desired thinness.If you have a ravioli cutter you can use that, or you can use a glass to cut circles, or you can do like we did and use a cookie cutter to make fun shapes celebrating the holiday.After you have your ravioli cut out, you'll drop a good teaspoonful of the prosciutto mixture into the center of the pasta.",
                ingredients: [
                  {
                    id: 10118334,
                    name: 'pasta dough',
                    localizedName: 'pasta dough',
                    image: 'dough.jpg'
                  },
                  {
                    id: 10010123,
                    name: 'prosciutto',
                    localizedName: 'prosciutto',
                    image: 'proscuitto.jpg'
                  },
                  {
                    id: 93832,
                    name: 'ravioli',
                    localizedName: 'ravioli',
                    image: 'ravioli.png'
                  },
                  {
                    id: 10011457,
                    name: 'spinach',
                    localizedName: 'spinach',
                    image: 'spinach.jpg'
                  },
                  {
                    id: 10118192,
                    name: 'cookies',
                    localizedName: 'cookies',
                    image: 'shortbread-cookies.jpg'
                  },
                  {
                    id: 20420,
                    name: 'pasta',
                    localizedName: 'pasta',
                    image: 'fusilli.jpg'
                  },
                  {
                    id: 0,
                    name: 'roll',
                    localizedName: 'roll',
                    image: 'dinner-yeast-rolls.jpg'
                  },
                  {
                    id: 0,
                    name: 'pop',
                    localizedName: 'pop',
                    image: ''
                  }
                ],
                equipment: [
                  {
                    id: 221429,
                    name: 'cookie cutter',
                    localizedName: 'cookie cutter',
                    image: 'cookie-cutters.jpg'
                  },
                  {
                    id: 406908,
                    name: 'pasta machine',
                    localizedName: 'pasta machine',
                    image: 'pasta-machine.jpg'
                  }
                ]
              },
              {
                number: 6,
                step: "Brush the edges with an egg wash (the egg white from one egg) and place another pasta piece over the top. Seal the edges with your fingers, a fork, or whatever puts a smile on your face.Grab a pot, fill it up with water and set it to boil. The pasta will cook up quick (it will float when cooked)Grab another pan, drop the butter into it and cook it on medium until it turns a beautiful golden brown and gives off a lovely nutty smell. At this point you'll turn the heat down just a notch and add in your garlic.Now drop in your chopped basil, give it a swirl or two to let the basil wilt and your butter sauce is ready to rumble.",
                ingredients: [
                  {
                    id: 1124,
                    name: 'egg whites',
                    localizedName: 'egg whites',
                    image: 'egg-white.jpg'
                  },
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  },
                  {
                    id: 2044,
                    name: 'basil',
                    localizedName: 'basil',
                    image: 'basil.jpg'
                  },
                  {
                    id: 20420,
                    name: 'pasta',
                    localizedName: 'pasta',
                    image: 'fusilli.jpg'
                  },
                  {
                    id: 0,
                    name: 'sauce',
                    localizedName: 'sauce',
                    image: ''
                  },
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  },
                  {
                    id: 404752,
                    name: 'pot',
                    localizedName: 'pot',
                    image: 'stock-pot.jpg'
                  }
                ]
              },
              {
                number: 7,
                step: 'Drain your cooked up ravioli, dump them in the butter sauce and get them good and coated.',
                ingredients: [
                  {
                    id: 93832,
                    name: 'ravioli',
                    localizedName: 'ravioli',
                    image: 'ravioli.png'
                  },
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  },
                  {
                    id: 0,
                    name: 'sauce',
                    localizedName: 'sauce',
                    image: ''
                  }
                ],
                equipment: []
              },
              {
                number: 8,
                step: 'Serve them up with a little grated Parmesan or Romano over the top.',
                ingredients: [
                  {
                    id: 1033,
                    name: 'parmesan',
                    localizedName: 'parmesan',
                    image: 'parmesan.jpg'
                  },
                  {
                    id: 1038,
                    name: 'romano cheese',
                    localizedName: 'romano cheese',
                    image: 'parmesan.jpg'
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/prosciutto-and-mushroom-ravioli-with-basil-browned-butter-sauce-657159'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 10,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 10,
        spoonacularScore: 57.0,
        healthScore: 12.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 190.42,
        extendedIngredients: [
          {
            id: 11677,
            aisle: 'Produce',
            image: 'shallots.jpg',
            consistency: 'solid',
            name: 'shallot',
            original: '1 small shallot chopped',
            originalString: '1 small shallot chopped',
            originalName: 'shallot chopped',
            amount: 1.0,
            unit: 'small',
            meta: [
              'chopped'
            ],
            metaInformation: [
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'small',
                unitLong: 'small'
              },
              metric: {
                amount: 1.0,
                unitShort: 'small',
                unitLong: 'small'
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic',
            original: '1 teaspoon chopped garlic',
            originalString: '1 teaspoon chopped garlic',
            originalName: 'chopped garlic',
            amount: 1.0,
            unit: 'teaspoon',
            meta: [
              'chopped'
            ],
            metaInformation: [
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              },
              metric: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              }
            }
          },
          {
            id: 11260,
            aisle: 'Produce',
            image: 'mushrooms.png',
            consistency: 'solid',
            name: 'mushrooms',
            original: '4 mushrooms sliced',
            originalString: '4 mushrooms sliced',
            originalName: 'mushrooms sliced',
            amount: 4.0,
            unit: '',
            meta: [
              'sliced'
            ],
            metaInformation: [
              'sliced'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 10311529,
            aisle: 'Produce',
            image: 'cherry-tomatoes.png',
            consistency: 'solid',
            name: 'cherry tomatoes',
            original: '8 cherry tomatoes sliced',
            originalString: '8 cherry tomatoes sliced',
            originalName: 'cherry tomatoes sliced',
            amount: 8.0,
            unit: '',
            meta: [
              'sliced'
            ],
            metaInformation: [
              'sliced'
            ],
            measures: {
              us: {
                amount: 8.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 8.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 2044,
            aisle: 'Produce',
            image: 'fresh-basil.jpg',
            consistency: 'solid',
            name: 'fresh basil',
            original: '1 tablespoon fresh chopped basil',
            originalString: '1 tablespoon fresh chopped basil',
            originalName: 'fresh chopped basil',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [
              'fresh',
              'chopped'
            ],
            metaInformation: [
              'fresh',
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 10011457,
            aisle: 'Produce',
            image: 'spinach.jpg',
            consistency: 'solid',
            name: 'spinach',
            original: '1/2 cup fresh spinach chopped',
            originalString: '1/2 cup fresh spinach chopped',
            originalName: 'fresh spinach chopped',
            amount: 0.5,
            unit: 'cup',
            meta: [
              'fresh',
              'chopped'
            ],
            metaInformation: [
              'fresh',
              'chopped'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1123,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg.png',
            consistency: 'solid',
            name: 'eggs',
            original: '4 eggs whisked',
            originalString: '4 eggs whisked',
            originalName: 'eggs whisked',
            amount: 4.0,
            unit: '',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 1041009,
            aisle: 'Cheese',
            image: 'cheddar-cheese.png',
            consistency: 'solid',
            name: 'cheese',
            original: '1/2 cup white cheese',
            originalString: '1/2 cup white cheese',
            originalName: 'white cheese',
            amount: 0.5,
            unit: 'cup',
            meta: [
              'white'
            ],
            metaInformation: [
              'white'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 4053,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'olive-oil.jpg',
            consistency: 'liquid',
            name: 'olive oil',
            original: 'Drizzle of olive oil',
            originalString: 'Drizzle of olive oil',
            originalName: 'Drizzle of olive oil',
            amount: 1.0,
            unit: 'serving',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          }
        ],
        id: 650239,
        title: 'Loaded Veggie Omelet',
        readyInMinutes: 45,
        servings: 2,
        sourceUrl: 'https://www.foodista.com/recipe/MTFXZNRX/loaded-veggie-omelet',
        image: 'https://spoonacular.com/recipeImages/650239-556x370.jpg',
        imageType: 'jpg',
        summary: 'If you have roughly <b>about 45 minutes</b> to spend in the kitchen, Loaded Veggie Omelet might be a spectacular <b>gluten free, primal, and ketogenic</b> recipe to try. This main course has <b>336 calories</b>, <b>21g of protein</b>, and <b>25g of fat</b> per serving. For <b>$1.9 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. This recipe from Foodista requires spinach, basil, drizzle of olive oil, and cherry tomatoes. 7 people have made this recipe and would make it again. Overall, this recipe earns a <b>solid spoonacular score of 56%</b>. Similar recipes are <a href="https://spoonacular.com/recipes/loaded-baked-omelet-muffins-902359">Loaded Baked Omelet Muffins</a>, <a href="https://spoonacular.com/recipes/loaded-baked-omelet-muffins-954178">Loaded Baked Omelet Muffins</a>, and <a href="https://spoonacular.com/recipes/loaded-baked-potato-cheese-omelet-526411">Loaded Baked Potato Cheese Omelet</a>.',
        cuisines: [],
        dishTypes: [
          'lunch',
          'main course',
          'morning meal',
          'brunch',
          'main dish',
          'breakfast',
          'dinner'
        ],
        diets: [
          'gluten free',
          'primal'
        ],
        occasions: [],
        instructions: 'Preheat the oven to warm or 170 degrees. Bring a small saute pan or small omelet pan to a warm.\nSaute the veggies using the olive oil starting with the shallot and garlic, adding the mushrooms until they are tender. Toss in the tomatoes and spinach and remove the pan from the heat.\nPour a layer of the egg into a small omelet pan or small saute pan. As the egg starts to cook run a spatula around the edge to loosen the egg. Once the egg is almost cooked (slightly runny on the top) sprinkle half the basil, cheese, and sauteed veggies on to one side of the egg. Gently fold the egg over the filling.\nSlide the omelet onto a small oven safe plate and put it in the oven.\nRepeat for the second omelet!',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Preheat the oven to warm or 170 degrees. Bring a small saute pan or small omelet pan to a warm.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  },
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 2,
                step: 'Saute the veggies using the olive oil starting with the shallot and garlic, adding the mushrooms until they are tender. Toss in the tomatoes and spinach and remove the pan from the heat.',
                ingredients: [
                  {
                    id: 11260,
                    name: 'mushrooms',
                    localizedName: 'mushrooms',
                    image: 'mushrooms.png'
                  },
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg'
                  },
                  {
                    id: 11529,
                    name: 'tomato',
                    localizedName: 'tomato',
                    image: 'tomato.png'
                  },
                  {
                    id: 11677,
                    name: 'shallot',
                    localizedName: 'shallot',
                    image: 'shallots.jpg'
                  },
                  {
                    id: 10011457,
                    name: 'spinach',
                    localizedName: 'spinach',
                    image: 'spinach.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 3,
                step: 'Pour a layer of the egg into a small omelet pan or small saute pan. As the egg starts to cook run a spatula around the edge to loosen the egg. Once the egg is almost cooked (slightly runny on the top) sprinkle half the basil, cheese, and sauteed veggies on to one side of the egg. Gently fold the egg over the filling.',
                ingredients: [
                  {
                    id: 1041009,
                    name: 'cheese',
                    localizedName: 'cheese',
                    image: 'cheddar-cheese.png'
                  },
                  {
                    id: 2044,
                    name: 'basil',
                    localizedName: 'basil',
                    image: 'basil.jpg'
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: [
                  {
                    id: 404642,
                    name: 'spatula',
                    localizedName: 'spatula',
                    image: 'spatula-or-turner.jpg'
                  },
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 4,
                step: 'Slide the omelet onto a small oven safe plate and put it in the oven.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ]
              },
              {
                number: 5,
                step: 'Repeat for the second omelet!',
                ingredients: [],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/loaded-veggie-omelet-650239'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 15,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 105,
        spoonacularScore: 24.0,
        healthScore: 1.0,
        creditsText: 'Afrolems',
        license: 'CC BY 4.0',
        sourceName: 'Afrolems',
        pricePerServing: 25.42,
        extendedIngredients: [
          {
            id: 20081,
            aisle: 'Baking',
            image: 'flour.png',
            consistency: 'solid',
            name: 'all purpose flour',
            original: '2 2/3 cups of all purpose Flour',
            originalString: '2 2/3 cups of all purpose Flour',
            originalName: 'all purpose Flour',
            amount: 2.6666666666666665,
            unit: 'cups',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 2.667,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 630.901,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 18371,
            aisle: 'Baking',
            image: 'white-powder.jpg',
            consistency: 'solid',
            name: 'baking powder',
            original: '1/2 teaspoon Baking Powder',
            originalString: '1/2 teaspoon Baking Powder',
            originalName: 'Baking Powder',
            amount: 0.5,
            unit: 'teaspoon',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 18372,
            aisle: 'Baking',
            image: 'white-powder.jpg',
            consistency: 'solid',
            name: 'baking soda',
            original: '1/4 teaspoon Baking Soda',
            originalString: '1/4 teaspoon Baking Soda',
            originalName: 'Baking Soda',
            amount: 0.25,
            unit: 'teaspoon',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 9040,
            aisle: 'Produce',
            image: 'bananas.jpg',
            consistency: 'solid',
            name: 'bananas',
            original: '4 Ripe Bananas',
            originalString: '4 Ripe Bananas',
            originalName: 'Ripe Bananas',
            amount: 4.0,
            unit: '',
            meta: [
              'ripe'
            ],
            metaInformation: [
              'ripe'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            original: '9 tablespoon of Softened Butter',
            originalString: '9 tablespoon of Softened Butter',
            originalName: 'Softened Butter',
            amount: 9.0,
            unit: 'tablespoon',
            meta: [
              'softened'
            ],
            metaInformation: [
              'softened'
            ],
            measures: {
              us: {
                amount: 9.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 9.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 12108,
            aisle: 'Baking',
            image: 'coconut-flakes.png',
            consistency: 'solid',
            name: 'coconut flakes',
            original: '1/2 cup of Coconut flakes',
            originalString: '1/2 cup of Coconut flakes',
            originalName: 'Coconut flakes',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1123,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg.png',
            consistency: 'solid',
            name: 'eggs',
            original: '4 Eggs',
            originalString: '4 Eggs',
            originalName: 'Eggs',
            amount: 4.0,
            unit: '',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 4.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 2047,
            aisle: 'Spices and Seasonings',
            image: 'salt.jpg',
            consistency: 'solid',
            name: 'salt',
            original: 'A pinch of Salt',
            originalString: 'A pinch of Salt',
            originalName: 'A of Salt',
            amount: 1.0,
            unit: 'pinch',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'pinch',
                unitLong: 'pinch'
              },
              metric: {
                amount: 1.0,
                unitShort: 'pinch',
                unitLong: 'pinch'
              }
            }
          },
          {
            id: 10019903,
            aisle: 'Baking',
            image: 'chocolate-chips.jpg',
            consistency: 'solid',
            name: 'semi sweet chocolate chips',
            original: '1/2 cup of semi-sweet Chocolate chips',
            originalString: '1/2 cup of semi-sweet Chocolate chips',
            originalName: 'semi-sweet Chocolate chips',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 19335,
            aisle: 'Baking',
            image: 'sugar-in-bowl.png',
            consistency: 'solid',
            name: 'sugar',
            original: '11/3 cups of Sugar',
            originalString: '11/3 cups of Sugar',
            originalName: 'Sugar',
            amount: 3.6666666666666665,
            unit: 'cups',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 3.667,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 867.489,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          }
        ],
        id: 716379,
        title: 'Chocolate Coconut Banana Bread',
        readyInMinutes: 45,
        servings: 20,
        sourceUrl: 'http://www.afrolems.com/2015/05/28/chocolate-banana-bread/',
        image: 'https://spoonacular.com/recipeImages/716379-556x370.jpg',
        imageType: 'jpg',
        summary: 'The recipe Chocolate Coconut Banana Bread can be made <b>in roughly 45 minutes</b>. For <b>25 cents per serving</b>, you get a morn meal that serves 20. One serving contains <b>322 calories</b>, <b>4g of protein</b>, and <b>9g of fat</b>. Several people made this recipe, and 106 would say it hit the spot. It is brought to you by Afrolems. Head to the store and pick up bananas, baking soda, sugar, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 38%</b>, which is not so great. Similar recipes are <a href="https://spoonacular.com/recipes/chocolate-coconut-banana-bread-612789">Chocolate Coconut Banana Bread</a>, <a href="https://spoonacular.com/recipes/coconut-pecan-chocolate-chip-banana-bread-605542">Coconut Pecan Chocolate Chip Banana Bread</a>, and <a href="https://spoonacular.com/recipes/dark-chocolate-coconut-banana-bread-pancakes-166854">Dark Chocolate Coconut Banana Bread Pancakes</a>.',
        cuisines: [],
        dishTypes: [],
        diets: [],
        occasions: [],
        instructions: '<p>Combine the wet ingredients in a bowl.</p><p>Combine the dry ingredients in a separate bowl except the coconut flakes and chocolate chips.</p><p>Pre-heat your oven to 375F.</p><p>Combine both wet and dry ingredients and beat till the mixture is smooth.</p><p>Grease your baking pans with some oil and pour in mixture into baking pans (this recipe makes enough for two loaves). Top it with the chocolate chips and coconut flakes.</p><p>Place in the oven and bake for 30-35 minutes.</p><p>Serve warm with tea or coffee</p>',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Combine the wet ingredients in a bowl.',
                ingredients: [],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Combine the dry ingredients in a separate bowl except the coconut flakes and chocolate chips.Pre-heat your oven to 375F.',
                ingredients: [
                  {
                    id: 99278,
                    name: 'chocolate chips',
                    localizedName: 'chocolate chips',
                    image: 'chocolate-chips.jpg'
                  },
                  {
                    id: 12108,
                    name: 'coconut flakes',
                    localizedName: 'coconut flakes',
                    image: 'coconut-flakes.png'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  },
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg',
                    temperature: {
                      number: 375.0,
                      unit: 'Fahrenheit'
                    }
                  }
                ]
              },
              {
                number: 3,
                step: 'Combine both wet and dry ingredients and beat till the mixture is smooth.Grease your baking pans with some oil and pour in mixture into baking pans (this recipe makes enough for two loaves). Top it with the chocolate chips and coconut flakes.',
                ingredients: [
                  {
                    id: 99278,
                    name: 'chocolate chips',
                    localizedName: 'chocolate chips',
                    image: 'chocolate-chips.jpg'
                  },
                  {
                    id: 12108,
                    name: 'coconut flakes',
                    localizedName: 'coconut flakes',
                    image: 'coconut-flakes.png'
                  },
                  {
                    id: 4582,
                    name: 'cooking oil',
                    localizedName: 'cooking oil',
                    image: 'vegetable-oil.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404646,
                    name: 'baking pan',
                    localizedName: 'baking pan',
                    image: 'roasting-pan.jpg'
                  }
                ]
              },
              {
                number: 4,
                step: 'Place in the oven and bake for 30-35 minutes.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ],
                length: {
                  number: 35,
                  unit: 'minutes'
                }
              },
              {
                number: 5,
                step: 'Serve warm with tea or coffee',
                ingredients: [
                  {
                    id: 14209,
                    name: 'coffee',
                    localizedName: 'coffee',
                    image: 'brewed-coffee.jpg'
                  },
                  {
                    id: 14355,
                    name: 'tea',
                    localizedName: 'tea',
                    image: 'tea-bags.jpg'
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/chocolate-coconut-banana-bread-716379'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: true,
        sustainable: false,
        weightWatcherSmartPoints: 19,
        gaps: 'no',
        lowFodmap: false,
        preparationMinutes: 20,
        cookingMinutes: 10,
        aggregateLikes: 1254,
        spoonacularScore: 93.0,
        healthScore: 28.0,
        creditsText: 'Jen West',
        license: 'CC BY-SA 3.0',
        sourceName: 'Pink When',
        pricePerServing: 369.37,
        extendedIngredients: [
          {
            id: 10211821,
            aisle: 'Produce',
            image: 'bell-pepper-orange.png',
            consistency: 'solid',
            name: 'bell peppers',
            original: 'bell peppers',
            originalString: 'bell peppers',
            originalName: 'bell peppers',
            amount: 4.0,
            unit: 'servings',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              },
              metric: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              }
            }
          },
          {
            id: 2031,
            aisle: 'Spices and Seasonings',
            image: 'chili-powder.jpg',
            consistency: 'solid',
            name: 'cayenne',
            original: '½ tsp cayenne',
            originalString: '½ tsp cayenne',
            originalName: 'cayenne',
            amount: 0.5,
            unit: 'tsp',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 2009,
            aisle: 'Spices and Seasonings',
            image: 'chili-powder.jpg',
            consistency: 'solid',
            name: 'chili powder',
            original: '¼ tsp chili powder',
            originalString: '¼ tsp chili powder',
            originalName: 'chili powder',
            amount: 0.25,
            unit: 'tsp',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 99233,
            aisle: 'Meat',
            image: 'chorizo.jpg',
            consistency: 'solid',
            name: 'chorizo',
            original: '1 pound chorizo',
            originalString: '1 pound chorizo',
            originalName: 'chorizo',
            amount: 1.0,
            unit: 'pound',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'lb',
                unitLong: 'pound'
              },
              metric: {
                amount: 453.592,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1002014,
            aisle: 'Spices and Seasonings',
            image: 'ground-cumin.jpg',
            consistency: 'solid',
            name: 'cumin',
            original: '¼ tsp cumin',
            originalString: '¼ tsp cumin',
            originalName: 'cumin',
            amount: 0.25,
            unit: 'tsp',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 11291,
            aisle: 'Produce',
            image: 'spring-onions.jpg',
            consistency: 'solid',
            name: 'green onion tops',
            original: 'green onion tops',
            originalString: 'green onion tops',
            originalName: 'green onion tops',
            amount: 4.0,
            unit: 'servings',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              },
              metric: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              }
            }
          },
          {
            id: 1001025,
            aisle: 'Cheese',
            image: 'shredded-cheese-white.jpg',
            consistency: 'solid',
            name: 'jack cheese',
            original: '¼ cup mixed monterrey jack and cheddar cheese',
            originalString: '¼ cup mixed monterrey jack and cheddar cheese',
            originalName: 'mixed monterrey jack and cheddar cheese',
            amount: 0.25,
            unit: 'cup',
            meta: [
              'mixed'
            ],
            metaInformation: [
              'mixed'
            ],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 23557,
            aisle: 'Meat',
            image: 'fresh-ground-beef.jpg',
            consistency: 'solid',
            name: 'lean ground beef',
            original: '1 pound lean ground beef',
            originalString: '1 pound lean ground beef',
            originalName: 'lean ground beef',
            amount: 1.0,
            unit: 'pound',
            meta: [
              'lean'
            ],
            metaInformation: [
              'lean'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'lb',
                unitLong: 'pound'
              },
              metric: {
                amount: 453.592,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 20035,
            aisle: 'Pasta and Rice;Health Foods',
            image: 'uncooked-quinoa.png',
            consistency: 'solid',
            name: 'quinoa',
            original: '1 cup quinoa',
            originalString: '1 cup quinoa',
            originalName: 'quinoa',
            amount: 1.0,
            unit: 'cup',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'cup',
                unitLong: 'cup'
              },
              metric: {
                amount: 236.588,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          }
        ],
        id: 715523,
        title: 'Chorizo and Beef Quinoa Stuffed Pepper',
        readyInMinutes: 30,
        servings: 4,
        sourceUrl: 'http://www.pinkwhen.com/chorizo-and-beef-quinoa-stuffed-pepper-recipe/',
        image: 'https://spoonacular.com/recipeImages/715523-556x370.jpg',
        imageType: 'jpg',
        summary: 'Chorizo and Beef Quinoa Stuffed Pepper might be just the main course you are searching for. One serving contains <b>881 calories</b>, <b>60g of protein</b>, and <b>54g of fat</b>. This gluten free recipe serves 4 and costs <b>$3.69 per serving</b>. Head to the store and pick up bell peppers, chorizo, chili powder, and a few other things to make it today. To use up the quinoa you could follow this main course with the <a href="https://spoonacular.com/recipes/quinoa-pudding-129583">Quinoa Pudding</a> as a dessert. 1254 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>30 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is super. Try <a href="https://spoonacular.com/recipes/pepper-stuffed-peppers-with-chorizo-498937">Pepper-Stuffed Peppers with Chorizo</a>, <a href="https://spoonacular.com/recipes/chorizo-red-pepper-stuffed-potatoes-with-roasted-garlic-aioli-22379">Chorizo & Red Pepper Stuffed Potatoes With Roasted Garlic Aioli</a>, and <a href="https://spoonacular.com/recipes/quinoa-and-ground-turkey-stuffed-pepper-508619">QUINOAn AND GROUND TURKEY STUFFED PEPPER</a> for similar recipes.',
        cuisines: [],
        dishTypes: [
          'lunch',
          'main course',
          'main dish',
          'dinner'
        ],
        diets: [
          'gluten free'
        ],
        occasions: [],
        instructions: 'The first thing you will want to do is heat the oven to 350, boil the water for the quinoa, and in a separate skillet brown the beef and chorizo together. Drain the meat mixture well, and then place into a medium mixing bowl.Once your quinoa is fully cooked, add it to the mixing bowl. Add the green onion tops, cumin, cayenne, chili powder, and monterrey jack and cheddar cheese. Mix well.Cut the tops from your bell peppers and scoop out any remaining seeds.Then take your meat mixture and start stuffing the bell peppers until they are full. Sprinkle with a little cheese and then bake in the oven for about 10 minutes until the bell pepper has softened. Serve immediately.',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'The first thing you will want to do is heat the oven to 350, boil the water for the quinoa, and in a separate skillet brown the beef and chorizo together.',
                ingredients: [
                  {
                    id: 99233,
                    name: 'chorizo',
                    localizedName: 'chorizo',
                    image: 'chorizo.jpg'
                  },
                  {
                    id: 20035,
                    name: 'quinoa',
                    localizedName: 'quinoa',
                    image: 'uncooked-quinoa.png'
                  },
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  },
                  {
                    id: 23572,
                    name: 'beef',
                    localizedName: 'beef',
                    image: 'beef-cubes-raw.png'
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  },
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Drain the meat mixture well, and then place into a medium mixing bowl.Once your quinoa is fully cooked, add it to the mixing bowl.',
                ingredients: [
                  {
                    id: 20035,
                    name: 'quinoa',
                    localizedName: 'quinoa',
                    image: 'uncooked-quinoa.png'
                  },
                  {
                    id: 1065062,
                    name: 'meat',
                    localizedName: 'meat',
                    image: 'whole-chicken.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 405907,
                    name: 'mixing bowl',
                    localizedName: 'mixing bowl',
                    image: 'mixing-bowl.jpg'
                  }
                ]
              },
              {
                number: 3,
                step: 'Add the green onion tops, cumin, cayenne, chili powder, and monterrey jack and cheddar cheese.',
                ingredients: [
                  {
                    id: 11291,
                    name: 'green onions',
                    localizedName: 'green onions',
                    image: 'spring-onions.jpg'
                  },
                  {
                    id: 1009,
                    name: 'cheddar cheese',
                    localizedName: 'cheddar cheese',
                    image: 'cheddar-cheese.png'
                  },
                  {
                    id: 2009,
                    name: 'chili powder',
                    localizedName: 'chili powder',
                    image: 'chili-powder.jpg'
                  },
                  {
                    id: 2031,
                    name: 'ground cayenne pepper',
                    localizedName: 'ground cayenne pepper',
                    image: 'chili-powder.jpg'
                  },
                  {
                    id: 1002014,
                    name: 'cumin',
                    localizedName: 'cumin',
                    image: 'ground-cumin.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 4,
                step: 'Mix well.',
                ingredients: [],
                equipment: []
              },
              {
                number: 5,
                step: 'Cut the tops from your bell peppers and scoop out any remaining seeds.Then take your meat mixture and start stuffing the bell peppers until they are full.',
                ingredients: [
                  {
                    id: 10211821,
                    name: 'bell pepper',
                    localizedName: 'bell pepper',
                    image: 'bell-pepper-orange.png'
                  },
                  {
                    id: 18082,
                    name: 'stuffing',
                    localizedName: 'stuffing',
                    image: 'stuffing-mix.png'
                  },
                  {
                    id: 93818,
                    name: 'seeds',
                    localizedName: 'seeds',
                    image: 'sunflower-seeds.jpg'
                  },
                  {
                    id: 1065062,
                    name: 'meat',
                    localizedName: 'meat',
                    image: 'whole-chicken.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 6,
                step: 'Sprinkle with a little cheese and then bake in the oven for about 10 minutes until the bell pepper has softened.',
                ingredients: [
                  {
                    id: 10211821,
                    name: 'bell pepper',
                    localizedName: 'bell pepper',
                    image: 'bell-pepper-orange.png'
                  },
                  {
                    id: 1041009,
                    name: 'cheese',
                    localizedName: 'cheese',
                    image: 'cheddar-cheese.png'
                  }
                ],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ],
                length: {
                  number: 10,
                  unit: 'minutes'
                }
              },
              {
                number: 7,
                step: 'Serve immediately.',
                ingredients: [],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/chorizo-and-beef-quinoa-stuffed-pepper-715523'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 12,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 11,
        spoonacularScore: 38.0,
        healthScore: 4.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 110.64,
        extendedIngredients: [
          {
            id: 2069,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'balsamic-vinegar.jpg',
            consistency: 'liquid',
            name: 'balsamic vinegar',
            original: '1/2 cup balsamic vinegar',
            originalString: '1/2 cup balsamic vinegar',
            originalName: 'balsamic vinegar',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 19334,
            aisle: 'Baking',
            image: 'light-brown-sugar.jpg',
            consistency: 'solid',
            name: 'brown sugar',
            original: '1/2 cup brown sugar',
            originalString: '1/2 cup brown sugar',
            originalName: 'brown sugar',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 5066,
            aisle: 'Meat',
            image: 'chicken-drumsticks.jpg',
            consistency: 'solid',
            name: 'chicken drumsticks',
            original: '10 to 12 chicken drumsticks',
            originalString: '10 to 12 chicken drumsticks',
            originalName: 'chicken drumsticks',
            amount: 10.0,
            unit: '',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 10.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 10.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 11297,
            aisle: 'Produce;Spices and Seasonings',
            image: 'parsley.jpg',
            consistency: 'solid',
            name: 'fresh flat-leaf parsley',
            original: '1/4 cup chopped fresh flat-leaf parsley',
            originalString: '1/4 cup chopped fresh flat-leaf parsley',
            originalName: 'chopped fresh flat-leaf parsley',
            amount: 0.25,
            unit: 'cup',
            meta: [
              'fresh',
              'chopped'
            ],
            metaInformation: [
              'fresh',
              'chopped'
            ],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic cloves',
            original: '5 garlic cloves, halved',
            originalString: '5 garlic cloves, halved',
            originalName: 'garlic cloves, halved',
            amount: 5.0,
            unit: '',
            meta: [
              'halved'
            ],
            metaInformation: [
              'halved'
            ],
            measures: {
              us: {
                amount: 5.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 5.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 19296,
            aisle: 'Nut butters, Jams, and Honey',
            image: 'honey.png',
            consistency: 'liquid',
            name: 'honey',
            original: '1/2 cup honey',
            originalString: '1/2 cup honey',
            originalName: 'honey',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 2036,
            aisle: 'Produce;Spices and Seasonings',
            image: 'rosemary.jpg',
            consistency: 'solid',
            name: 'rosemary',
            original: '5 sprigs of rosemary',
            originalString: '5 sprigs of rosemary',
            originalName: 'rosemary',
            amount: 5.0,
            unit: 'sprigs',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 5.0,
                unitShort: 'sprigs',
                unitLong: 'sprigs'
              },
              metric: {
                amount: 5.0,
                unitShort: 'sprigs',
                unitLong: 'sprigs'
              }
            }
          },
          {
            id: 12023,
            aisle: 'Ethnic Foods;Spices and Seasonings',
            image: 'sesame-seeds.png',
            consistency: 'solid',
            name: 'sesame seeds',
            original: '2 tablespoons toasted sesame seeds',
            originalString: '2 tablespoons toasted sesame seeds',
            originalName: 'toasted sesame seeds',
            amount: 2.0,
            unit: 'tablespoons',
            meta: [
              'toasted'
            ],
            metaInformation: [
              'toasted'
            ],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 16124,
            aisle: 'Ethnic Foods;Condiments',
            image: 'soy-sauce.jpg',
            consistency: 'liquid',
            name: 'soy sauce',
            original: '1/4 cup soy sauce',
            originalString: '1/4 cup soy sauce',
            originalName: 'soy sauce',
            amount: 0.25,
            unit: 'cup',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          }
        ],
        id: 633955,
        title: 'Balsamic-Honey Chicken Drumsticks',
        readyInMinutes: 45,
        servings: 8,
        sourceUrl: 'http://www.foodista.com/recipe/VV27WS4C/balsamic-honey-chicken-drumsticks',
        image: 'https://spoonacular.com/recipeImages/633955-556x370.jpg',
        imageType: 'jpg',
        summary: 'Balsamic-Honey Chicken Drumsticks might be just the main course you are searching for. This recipe makes 8 servings with <b>301 calories</b>, <b>18g of protein</b>, and <b>10g of fat</b> each. For <b>$1.11 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. If you have sesame seeds, brown sugar, chicken drumsticks, and a few other ingredients on hand, you can make it. To use up the rosemary you could follow this main course with the <a href="https://spoonacular.com/recipes/raspberry-brie-dessert-pizza-with-rosemary-and-candied-pecans-591875">Raspberry Brie Dessert Pizza with Rosemary and Candied Pecans</a> as a dessert. 11 person have made this recipe and would make it again. All things considered, we decided this recipe <b>deserves a spoonacular score of 41%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/sticky-honey-balsamic-chicken-drumsticks-519513">Sticky Honey Balsamic Chicken Drumsticks</a>, <a href="https://spoonacular.com/recipes/chicken-drumsticks-with-a-mushroom-balsamic-sauce-542261">Chicken Drumsticks with a Mushroom Balsamic Sauce</a>, and <a href="https://spoonacular.com/recipes/honey-soy-chicken-drumsticks-112340">Honey Soy Chicken Drumsticks</a> for similar recipes.',
        cuisines: [],
        dishTypes: [
          'lunch',
          'main course',
          'main dish',
          'dinner'
        ],
        diets: [
          'gluten free',
          'dairy free'
        ],
        occasions: [],
        instructions: '<ol><li>Combine the balsamic vinegar, honey, brown sugar, soy sauce, rosemary sprigs, and garlic cloves in a large, resealable plastic bag. Shake and squeeze the contents of the bag to dissolve the honey and brown sugar. Add the chicken drumsticks to the bag and seal with as little air as possible in the bag. Place in the refrigerator and marinate for 2 hours.</li><li>Preheat the oven to 450 degrees F.</li><li>Place the chicken drumsticks on a foil-lined baking sheet. Bake until the skin is caramelized and very dark in spots, about 30 to 35 minutes.</li><li>Meanwhile, place the marinade in a small saucepan. Bring the marinade to a boil. Reduce the heat to simmer and cook over low heat until thick, about 15 minutes. Reserve.</li><li>Use a pastry brush to brush some of the boiled marinade on the cooked chicken. Place the chicken on a serving platter. Sprinkle with the sesame seeds and the chopped parsley.</li></ol>',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Combine the balsamic vinegar, honey, brown sugar, soy sauce, rosemary sprigs, and garlic cloves in a large, resealable plastic bag. Shake and squeeze the contents of the bag to dissolve the honey and brown sugar.',
                ingredients: [
                  {
                    id: 2069,
                    name: 'balsamic vinegar',
                    localizedName: 'balsamic vinegar',
                    image: 'balsamic-vinegar.jpg'
                  },
                  {
                    id: 10211215,
                    name: 'whole garlic cloves',
                    localizedName: 'whole garlic cloves',
                    image: 'garlic.jpg'
                  },
                  {
                    id: 19334,
                    name: 'brown sugar',
                    localizedName: 'brown sugar',
                    image: 'dark-brown-sugar.png'
                  },
                  {
                    id: 16124,
                    name: 'soy sauce',
                    localizedName: 'soy sauce',
                    image: 'soy-sauce.jpg'
                  },
                  {
                    id: 2036,
                    name: 'rosemary',
                    localizedName: 'rosemary',
                    image: 'rosemary.jpg'
                  },
                  {
                    id: 19296,
                    name: 'honey',
                    localizedName: 'honey',
                    image: 'honey.png'
                  },
                  {
                    id: 0,
                    name: 'shake',
                    localizedName: 'shake',
                    image: ''
                  }
                ],
                equipment: [
                  {
                    id: 221671,
                    name: 'ziploc bags',
                    localizedName: 'ziploc bags',
                    image: 'plastic-bag.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Add the chicken drumsticks to the bag and seal with as little air as possible in the bag.',
                ingredients: [
                  {
                    id: 5066,
                    name: 'chicken drumsticks',
                    localizedName: 'chicken drumsticks',
                    image: 'chicken-drumsticks.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 3,
                step: 'Place in the refrigerator and marinate for 2 hours.Preheat the oven to 450 degrees F.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg',
                    temperature: {
                      number: 450.0,
                      unit: 'Fahrenheit'
                    }
                  }
                ],
                length: {
                  number: 120,
                  unit: 'minutes'
                }
              },
              {
                number: 4,
                step: 'Place the chicken drumsticks on a foil-lined baking sheet.',
                ingredients: [
                  {
                    id: 5066,
                    name: 'chicken drumsticks',
                    localizedName: 'chicken drumsticks',
                    image: 'chicken-drumsticks.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404727,
                    name: 'baking sheet',
                    localizedName: 'baking sheet',
                    image: 'baking-sheet.jpg'
                  },
                  {
                    id: 404765,
                    name: 'aluminum foil',
                    localizedName: 'aluminum foil',
                    image: 'aluminum-foil.png'
                  }
                ]
              },
              {
                number: 5,
                step: 'Bake until the skin is caramelized and very dark in spots, about 30 to 35 minutes.Meanwhile, place the marinade in a small saucepan. Bring the marinade to a boil. Reduce the heat to simmer and cook over low heat until thick, about 15 minutes. Reserve.Use a pastry brush to brush some of the boiled marinade on the cooked chicken.',
                ingredients: [
                  {
                    id: 5114,
                    name: 'cooked chicken',
                    localizedName: 'cooked chicken',
                    image: 'rotisserie-chicken.png'
                  },
                  {
                    id: 0,
                    name: 'marinade',
                    localizedName: 'marinade',
                    image: 'seasoning.png'
                  }
                ],
                equipment: [
                  {
                    id: 404764,
                    name: 'pastry brush',
                    localizedName: 'pastry brush',
                    image: 'pastry-brush.jpg'
                  },
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  },
                  {
                    id: 404669,
                    name: 'sauce pan',
                    localizedName: 'sauce pan',
                    image: 'sauce-pan.jpg'
                  }
                ],
                length: {
                  number: 45,
                  unit: 'minutes'
                }
              },
              {
                number: 6,
                step: 'Place the chicken on a serving platter.',
                ingredients: [
                  {
                    id: 5006,
                    name: 'whole chicken',
                    localizedName: 'whole chicken',
                    image: 'whole-chicken.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 7,
                step: 'Sprinkle with the sesame seeds and the chopped parsley.',
                ingredients: [
                  {
                    id: 12023,
                    name: 'sesame seeds',
                    localizedName: 'sesame seeds',
                    image: 'sesame-seeds.png'
                  },
                  {
                    id: 11297,
                    name: 'parsley',
                    localizedName: 'parsley',
                    image: 'parsley.jpg'
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/balsamic-honey-chicken-drumsticks-633955'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 30,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 138,
        spoonacularScore: 39.0,
        healthScore: 3.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 91.07,
        extendedIngredients: [
          {
            id: 1001053,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'fluid-cream.jpg',
            consistency: 'liquid',
            name: 'whipping cream',
            original: '1 3/4 cups whipping cream',
            originalString: '1 3/4 cups whipping cream',
            originalName: 'whipping cream',
            amount: 1.75,
            unit: 'cups',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.75,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 414.029,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 10019903,
            aisle: 'Baking',
            image: 'chocolate-chips.jpg',
            consistency: 'solid',
            name: 'semi sweet chocolate chips',
            original: '12 ounces quality semi-sweet chocolate chips',
            originalString: '12 ounces quality semi-sweet chocolate chips',
            originalName: 'quality semi-sweet chocolate chips',
            amount: 12.0,
            unit: 'ounces',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 12.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 340.194,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 14209,
            aisle: 'Tea and Coffee',
            image: 'brewed-coffee.jpg',
            consistency: 'solid',
            name: 'strong coffee',
            original: '3 ounces espresso or strong coffee',
            originalString: '3 ounces espresso or strong coffee',
            originalName: 'espresso or strong coffee',
            amount: 3.0,
            unit: 'ounces',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 3.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 85.049,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 14037,
            aisle: 'Alcoholic Beverages',
            image: 'rum-dark.jpg',
            consistency: 'liquid',
            name: 'dark rum',
            original: '1 tablespoon dark rum (optional)',
            originalString: '1 tablespoon dark rum (optional)',
            originalName: 'dark rum (optional)',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [
              'dark'
            ],
            metaInformation: [
              'dark'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            original: '4 tablespoons butter',
            originalString: '4 tablespoons butter',
            originalName: 'butter',
            amount: 4.0,
            unit: 'tablespoons',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 4.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: null,
            aisle: '?',
            image: null,
            consistency: null,
            name: 'flavorless',
            original: '1 teaspoon flavorless, granulated gelatin',
            originalString: '1 teaspoon flavorless, granulated gelatin',
            originalName: 'flavorless, granulated gelatin',
            amount: 1.0,
            unit: 'teaspoon',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              },
              metric: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              }
            }
          }
        ],
        id: 639099,
        title: 'Chocolate Mousse in Chocolate Shell',
        readyInMinutes: 45,
        servings: 6,
        sourceUrl: 'https://www.foodista.com/recipe/K4PSTQVT/chocolate-mousse-in-chocolate-shell',
        image: 'https://spoonacular.com/recipeImages/639099-556x370.jpg',
        imageType: 'jpg',
        summary: 'Chocolate Mousse in Chocolate Shell takes around <b>roughly 45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>641 calories</b>, <b>5g of protein</b>, and <b>55g of fat</b> per serving. This recipe serves 6. For <b>91 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. 138 people were impressed by this recipe. It will be a hit at your <b>valentin day</b> event. This recipe from Foodista requires whipping cream, butter, flavorless, and rum. Overall, this recipe earns a <b>rather bad spoonacular score of 38%</b>. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/low-fat-chocolate-mousse-in-a-meringue-shell-pavlova-133162">Low-Fat Chocolate Mousse in a Meringue Shell (Pavlova)</a>, <a href="https://spoonacular.com/recipes/chocolate-peanut-butter-ice-cream-with-chocolate-shell-509560">Chocolate “Peanut Butter” Ice Cream with Chocolate Shell</a>, and <a href="https://spoonacular.com/recipes/eggless-chocolate-mousse-how-to-make-chocolate-mousse-488707">eggless chocolate mousse , how to make chocolate mousse</a>.',
        cuisines: [],
        dishTypes: [],
        diets: [
          'gluten free'
        ],
        occasions: [
          "valentine's day"
        ],
        instructions: 'Chill 1 1/2 cups whipping cream in refrigerator. Chill metal mixing bowl and mixer beaters in freezer.\nIn top of a double boiler, combine chocolate chips, coffee, rum and butter. Melt over barely simmering water, stirring constantly. Remove from heat while a couple of chunks are still visible. Cool, stirring occasionally to just above body temperature.\nPour remaining 1/4 cup whipping cream into a metal measuring cup and sprinkle in the gelatin. Allow gelatin to "bloom" for 10 minutes. Then carefully heat by swirling the measuring cup over a low gas flame or candle. Do not boil or gelatin will be damaged. Stir mixture into the cooled chocolate and set aside.\nIn the chilled mixing bowl, beat cream to medium peaks. Stir 1/4 of the whipped cream into the chocolate mixture to lighten it. Fold in the remaining whipped cream in two doses. There may be streaks of whipped cream in the chocolate and that is fine. Do not over work the mousse.\nSpoon into bowls, chocolate cups (see note in About section) or martini glasses and chill for at least 1 hour. Garnish with fruit and serve.\n(If mousse is to be refrigerated overnight, chill for one hour and then cover each with plastic wrap)',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Chill 1 1/2 cups whipping cream in refrigerator. Chill metal mixing bowl and mixer beaters in freezer.',
                ingredients: [
                  {
                    id: 1001053,
                    name: 'whipping cream',
                    localizedName: 'whipping cream',
                    image: 'fluid-cream.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 405907,
                    name: 'mixing bowl',
                    localizedName: 'mixing bowl',
                    image: 'mixing-bowl.jpg'
                  },
                  {
                    id: 404726,
                    name: 'blender',
                    localizedName: 'blender',
                    image: 'blender.png'
                  }
                ]
              },
              {
                number: 2,
                step: 'In top of a double boiler, combine chocolate chips, coffee, rum and butter. Melt over barely simmering water, stirring constantly.',
                ingredients: [
                  {
                    id: 99278,
                    name: 'chocolate chips',
                    localizedName: 'chocolate chips',
                    image: 'chocolate-chips.jpg'
                  },
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  },
                  {
                    id: 14209,
                    name: 'coffee',
                    localizedName: 'coffee',
                    image: 'brewed-coffee.jpg'
                  },
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  },
                  {
                    id: 11114037,
                    name: 'rum',
                    localizedName: 'rum',
                    image: 'rum-dark.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404699,
                    name: 'double boiler',
                    localizedName: 'double boiler',
                    image: 'double-boiler.jpg'
                  }
                ]
              },
              {
                number: 3,
                step: 'Remove from heat while a couple of chunks are still visible. Cool, stirring occasionally to just above body temperature.',
                ingredients: [],
                equipment: []
              },
              {
                number: 4,
                step: 'Pour remaining 1/4 cup whipping cream into a metal measuring cup and sprinkle in the gelatin. Allow gelatin to "bloom" for 10 minutes. Then carefully heat by swirling the measuring cup over a low gas flame or candle. Do not boil or gelatin will be damaged. Stir mixture into the cooled chocolate and set aside.',
                ingredients: [
                  {
                    id: 1001053,
                    name: 'whipping cream',
                    localizedName: 'whipping cream',
                    image: 'fluid-cream.jpg'
                  },
                  {
                    id: 19081,
                    name: 'chocolate',
                    localizedName: 'chocolate',
                    image: 'milk-chocolate.jpg'
                  },
                  {
                    id: 19177,
                    name: 'gelatin',
                    localizedName: 'gelatin',
                    image: 'gelatin-powder.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404766,
                    name: 'measuring cup',
                    localizedName: 'measuring cup',
                    image: 'measuring-cup.jpg'
                  }
                ],
                length: {
                  number: 10,
                  unit: 'minutes'
                }
              },
              {
                number: 5,
                step: 'In the chilled mixing bowl, beat cream to medium peaks. Stir 1/4 of the whipped cream into the chocolate mixture to lighten it. Fold in the remaining whipped cream in two doses. There may be streaks of whipped cream in the chocolate and that is fine. Do not over work the mousse.',
                ingredients: [
                  {
                    id: 1054,
                    name: 'whipped cream',
                    localizedName: 'whipped cream',
                    image: 'whipped-cream.jpg'
                  },
                  {
                    id: 19081,
                    name: 'chocolate',
                    localizedName: 'chocolate',
                    image: 'milk-chocolate.jpg'
                  },
                  {
                    id: 1053,
                    name: 'cream',
                    localizedName: 'cream',
                    image: 'fluid-cream.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 405907,
                    name: 'mixing bowl',
                    localizedName: 'mixing bowl',
                    image: 'mixing-bowl.jpg'
                  }
                ]
              },
              {
                number: 6,
                step: 'Spoon into bowls, chocolate cups (see note in About section) or martini glasses and chill for at least 1 hour.',
                ingredients: [
                  {
                    id: 19081,
                    name: 'chocolate',
                    localizedName: 'chocolate',
                    image: 'milk-chocolate.jpg'
                  },
                  {
                    id: 0,
                    name: 'martini',
                    localizedName: 'martini',
                    image: 'rum-dark.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ],
                length: {
                  number: 60,
                  unit: 'minutes'
                }
              },
              {
                number: 7,
                step: 'Garnish with fruit and serve.',
                ingredients: [
                  {
                    id: 9431,
                    name: 'fruit',
                    localizedName: 'fruit',
                    image: 'mixed-fresh-fruit.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 8,
                step: '(If mousse is to be refrigerated overnight, chill for one hour and then cover each with plastic wrap)',
                ingredients: [
                  {
                    id: 10018364,
                    name: 'wrap',
                    localizedName: 'wrap',
                    image: 'flour-tortilla.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404730,
                    name: 'plastic wrap',
                    localizedName: 'plastic wrap',
                    image: 'plastic-wrap.jpg'
                  }
                ],
                length: {
                  number: 60,
                  unit: 'minutes'
                }
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/chocolate-mousse-in-chocolate-shell-639099'
      },
      {
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 10,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 6,
        spoonacularScore: 10.0,
        healthScore: 0.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 50.51,
        extendedIngredients: [
          {
            id: 18617,
            aisle: 'Sweet Snacks',
            image: 'graham-crackers.jpg',
            consistency: 'solid',
            name: 'graham crackers',
            original: '18 chocolate graham crackers',
            originalString: '18 chocolate graham crackers',
            originalName: 'chocolate graham crackers',
            amount: 18.0,
            unit: '',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 18.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 18.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            original: '1 stick of butter – melted',
            originalString: '1 stick of butter – melted',
            originalName: 'butter – melted',
            amount: 1.0,
            unit: 'stick',
            meta: [
              'melted'
            ],
            metaInformation: [
              'melted'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'stick',
                unitLong: 'stick'
              },
              metric: {
                amount: 1.0,
                unitShort: 'stick',
                unitLong: 'stick'
              }
            }
          },
          {
            id: 19125,
            aisle: 'Nut butters, Jams, and Honey',
            image: 'hazelnut-chocolate-spread.jpg',
            consistency: 'solid',
            name: 'nutella',
            original: '1 13oz. jar Nutella',
            originalString: '1 13oz. jar Nutella',
            originalName: 'Nutella',
            amount: 13.0,
            unit: 'oz',
            meta: [],
            metaInformation: [],
            measures: {
              us: {
                amount: 13.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 368.544,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1200,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'whipped-cream.jpg',
            consistency: 'solid',
            name: 'nonfat cool whip',
            original: '1 8oz. container of Cool Whip – thawed in the refrigerator',
            originalString: '1 8oz. container of Cool Whip – thawed in the refrigerator',
            originalName: 'Cool Whip – thawed in the refrigerator',
            amount: 8.0,
            unit: 'oz',
            meta: [
              'thawed'
            ],
            metaInformation: [
              'thawed'
            ],
            measures: {
              us: {
                amount: 8.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 226.796,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1017,
            aisle: 'Cheese',
            image: 'cream-cheese.jpg',
            consistency: 'solid',
            name: 'cream cheese',
            original: '1 8oz. box of cream cheese – softened',
            originalString: '1 8oz. box of cream cheese – softened',
            originalName: 'box of cream cheese – softened',
            amount: 8.0,
            unit: 'oz',
            meta: [
              'softened'
            ],
            metaInformation: [
              'softened'
            ],
            measures: {
              us: {
                amount: 8.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 226.796,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          }
        ],
        id: 1098349,
        title: 'Mini Nutella Cheesecakes',
        readyInMinutes: 205,
        servings: 24,
        sourceUrl: 'https://www.foodista.com/recipe/G3LB37KK/mini-nutella-cheese-cake',
        image: 'https://spoonacular.com/recipeImages/1098349-556x370.jpg',
        imageType: 'jpg',
        summary: "The recipe Mini Nutella Cheesecakes can be made <b>in about 3 hours and 25 minutes</b>. One serving contains <b>208 calories</b>, <b>2g of protein</b>, and <b>13g of fat</b>. For <b>51 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. This recipe serves 24. Only a few people made this recipe, and 1 would say it hit the spot. If you have nonfat cool whip, cream cheese, nutella, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 81%</b>. This score is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/mini-nutella-cheesecakes-763329\">Mini Nutella Cheesecakes</a>, <a href=\"https://spoonacular.com/recipes/mini-oreo-nutella-cheesecakes-524832\">Mini Oreo Nutella Cheesecakes</a>, and <a href=\"https://spoonacular.com/recipes/mini-nutella-smores-cheesecakes-608047\">Mini Nutella S'mores Cheesecakes</a>.",
        cuisines: [],
        dishTypes: [],
        diets: [
          'lacto ovo vegetarian'
        ],
        occasions: [],
        instructions: '<ol><li>In advance, thaw your cool whip in the refrigerator.</li><li>Preheat oven to 350 degrees.</li><li>Place the chocolate graham crackers in a food processor and pulse until they are fine crumbs.</li><li>Add the melted butter to the food processor and pulse again until the butter is combined with the cracker crumbs.</li><li>Line a small 24-cup muffin tin with cupcake liners.</li><li>Using a very small ice cream scoop, place a scoop of the buttery crumbs into each cupcake liner.</li><li>Using the same ice cream scoop, turn it over and press the crackers into the bottom of each liner.</li><li>Bake for 10 minutes.</li><li>Cool completed before adding filling.</li><li>Add cream cheese and Nutella to a large bowl and mix using a hand mixer.</li><li>Once the cream cheese and Nutella are completely mixed, fold in the thawed cool whip.</li><li>Using the small ice cream scoop again, place one scoop of filling on top of each of the baked cracker crusts.</li><li>Freeze for 3-4 hours.</li><li>Serve right from the freezer.</li></ol>',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'In advance, thaw your cool whip in the refrigerator.Preheat oven to 350 degrees.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Place the chocolate graham crackers in a food processor and pulse until they are fine crumbs.',
                ingredients: [
                  {
                    id: 18617,
                    name: 'graham crackers',
                    localizedName: 'graham crackers',
                    image: 'graham-crackers.jpg'
                  },
                  {
                    id: 19081,
                    name: 'chocolate',
                    localizedName: 'chocolate',
                    image: 'milk-chocolate.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404771,
                    name: 'food processor',
                    localizedName: 'food processor',
                    image: 'food-processor.png'
                  }
                ]
              },
              {
                number: 3,
                step: 'Add the melted butter to the food processor and pulse again until the butter is combined with the cracker crumbs.Line a small 24-cup muffin tin with cupcake liners.Using a very small ice cream scoop, place a scoop of the buttery crumbs into each cupcake liner.Using the same ice cream scoop, turn it over and press the crackers into the bottom of each liner.',
                ingredients: [
                  {
                    id: 10018621,
                    name: 'cracker crumbs',
                    localizedName: 'cracker crumbs',
                    image: 'crackers.jpg'
                  },
                  {
                    id: 19095,
                    name: 'ice cream',
                    localizedName: 'ice cream',
                    image: 'vanilla-ice-cream.png'
                  },
                  {
                    id: 18621,
                    name: 'crackers',
                    localizedName: 'crackers',
                    image: 'crackers.jpg'
                  },
                  {
                    id: 18139,
                    name: 'cupcakes',
                    localizedName: 'cupcakes',
                    image: 'plain-cupcake.jpg'
                  },
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404742,
                    name: 'ice cream scoop',
                    localizedName: 'ice cream scoop',
                    image: 'ice-cream-scoop.jpg'
                  },
                  {
                    id: 404676,
                    name: 'muffin liners',
                    localizedName: 'muffin liners',
                    image: 'muffin-or-cupcake-forms.png'
                  },
                  {
                    id: 404771,
                    name: 'food processor',
                    localizedName: 'food processor',
                    image: 'food-processor.png'
                  },
                  {
                    id: 404671,
                    name: 'muffin tray',
                    localizedName: 'muffin tray',
                    image: 'muffin-tray.jpg'
                  }
                ]
              },
              {
                number: 4,
                step: 'Bake for 10 minutes.Cool completed before adding filling.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ],
                length: {
                  number: 10,
                  unit: 'minutes'
                }
              },
              {
                number: 5,
                step: 'Add cream cheese and Nutella to a large bowl and mix using a hand mixer.Once the cream cheese and Nutella are completely mixed, fold in the thawed cool whip.Using the small ice cream scoop again, place one scoop of filling on top of each of the baked cracker crusts.Freeze for 3-4 hours.',
                ingredients: [
                  {
                    id: 1017,
                    name: 'cream cheese',
                    localizedName: 'cream cheese',
                    image: 'cream-cheese.jpg'
                  },
                  {
                    id: 19095,
                    name: 'ice cream',
                    localizedName: 'ice cream',
                    image: 'vanilla-ice-cream.png'
                  },
                  {
                    id: 18621,
                    name: 'crackers',
                    localizedName: 'crackers',
                    image: 'crackers.jpg'
                  },
                  {
                    id: 19125,
                    name: 'chocolate hazelnut spread',
                    localizedName: 'chocolate hazelnut spread',
                    image: 'hazelnut-chocolate-spread.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404742,
                    name: 'ice cream scoop',
                    localizedName: 'ice cream scoop',
                    image: 'ice-cream-scoop.jpg'
                  },
                  {
                    id: 404628,
                    name: 'hand mixer',
                    localizedName: 'hand mixer',
                    image: 'hand-mixer.png'
                  },
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ],
                length: {
                  number: 240,
                  unit: 'minutes'
                }
              },
              {
                number: 6,
                step: 'Serve right from the freezer.',
                ingredients: [],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/mini-nutella-cheesecakes-1098349'
      }
    ]
  },
  currentRecipe: {
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 10,
    gaps: 'no',
    lowFodmap: false,
    aggregateLikes: 40,
    spoonacularScore: 19.0,
    healthScore: 1.0,
    creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
    license: 'CC BY 3.0',
    sourceName: 'Foodista',
    pricePerServing: 30.15,
    extendedIngredients: [
      {
        id: 1145,
        aisle: 'Milk, Eggs, Other Dairy',
        image: 'butter-sliced.jpg',
        consistency: 'solid',
        name: 'unsalted butter',
        original: '1/2 cup unsalted butter at room temperature',
        originalString: '1/2 cup unsalted butter at room temperature',
        originalName: 'unsalted butter at room temperature',
        amount: 0.5,
        unit: 'cup',
        meta: [
          'unsalted',
          'at room temperature'
        ],
        metaInformation: [
          'unsalted',
          'at room temperature'
        ],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'cups',
            unitLong: 'cups'
          },
          metric: {
            amount: 118.294,
            unitShort: 'ml',
            unitLong: 'milliliters'
          }
        }
      },
      {
        id: 20081,
        aisle: 'Baking',
        image: 'flour.png',
        consistency: 'solid',
        name: 'all purpose flour',
        original: '2 1/2 cups all purpose flour',
        originalString: '2 1/2 cups all purpose flour',
        originalName: 'all purpose flour',
        amount: 2.5,
        unit: 'cups',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 2.5,
            unitShort: 'cups',
            unitLong: 'cups'
          },
          metric: {
            amount: 591.47,
            unitShort: 'ml',
            unitLong: 'milliliters'
          }
        }
      },
      {
        id: 19335,
        aisle: 'Baking',
        image: 'sugar-in-bowl.png',
        consistency: 'solid',
        name: 'granulated sugar',
        original: '1/2 cup granulated sugar',
        originalString: '1/2 cup granulated sugar',
        originalName: 'granulated sugar',
        amount: 0.5,
        unit: 'cup',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'cups',
            unitLong: 'cups'
          },
          metric: {
            amount: 118.294,
            unitShort: 'ml',
            unitLong: 'milliliters'
          }
        }
      },
      {
        id: 19304,
        aisle: 'Baking',
        image: 'molasses.jpg',
        consistency: 'solid',
        name: 'molasses',
        original: '1/2 cup molasses',
        originalString: '1/2 cup molasses',
        originalName: 'molasses',
        amount: 0.5,
        unit: 'cup',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'cups',
            unitLong: 'cups'
          },
          metric: {
            amount: 118.294,
            unitShort: 'ml',
            unitLong: 'milliliters'
          }
        }
      },
      {
        id: 1123,
        aisle: 'Milk, Eggs, Other Dairy',
        image: 'egg.png',
        consistency: 'solid',
        name: 'egg',
        original: '1 large egg at room temperature',
        originalString: '1 large egg at room temperature',
        originalName: 'egg at room temperature',
        amount: 1.0,
        unit: 'large',
        meta: [
          'at room temperature'
        ],
        metaInformation: [
          'at room temperature'
        ],
        measures: {
          us: {
            amount: 1.0,
            unitShort: 'large',
            unitLong: 'large'
          },
          metric: {
            amount: 1.0,
            unitShort: 'large',
            unitLong: 'large'
          }
        }
      },
      {
        id: 2069,
        aisle: 'Oil, Vinegar, Salad Dressing',
        image: 'balsamic-vinegar.jpg',
        consistency: 'liquid',
        name: 'balsamic vinegar',
        original: '1 tablespoon balsamic vinegar',
        originalString: '1 tablespoon balsamic vinegar',
        originalName: 'balsamic vinegar',
        amount: 1.0,
        unit: 'tablespoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 1.0,
            unitShort: 'Tbsp',
            unitLong: 'Tbsp'
          },
          metric: {
            amount: 1.0,
            unitShort: 'Tbsp',
            unitLong: 'Tbsp'
          }
        }
      },
      {
        id: 18371,
        aisle: 'Baking',
        image: 'white-powder.jpg',
        consistency: 'solid',
        name: 'baking powder',
        original: '1 teaspoon baking powder',
        originalString: '1 teaspoon baking powder',
        originalName: 'baking powder',
        amount: 1.0,
        unit: 'teaspoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 1.0,
            unitShort: 'tsp',
            unitLong: 'teaspoon'
          },
          metric: {
            amount: 1.0,
            unitShort: 'tsp',
            unitLong: 'teaspoon'
          }
        }
      },
      {
        id: 2021,
        aisle: 'Spices and Seasonings',
        image: 'ginger.png',
        consistency: 'solid',
        name: 'ground ginger',
        original: '1 teaspoon ground ginger',
        originalString: '1 teaspoon ground ginger',
        originalName: 'ground ginger',
        amount: 1.0,
        unit: 'teaspoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 1.0,
            unitShort: 'tsp',
            unitLong: 'teaspoon'
          },
          metric: {
            amount: 1.0,
            unitShort: 'tsp',
            unitLong: 'teaspoon'
          }
        }
      },
      {
        id: 18372,
        aisle: 'Baking',
        image: 'white-powder.jpg',
        consistency: 'solid',
        name: 'baking soda',
        original: '1/2 teaspoon baking soda',
        originalString: '1/2 teaspoon baking soda',
        originalName: 'baking soda',
        amount: 0.5,
        unit: 'teaspoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          },
          metric: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          }
        }
      },
      {
        id: 1012010,
        aisle: 'Spices and Seasonings',
        image: 'cinnamon.jpg',
        consistency: 'solid',
        name: 'ground cinnamon',
        original: '1/2 teaspoon ground cinnamon',
        originalString: '1/2 teaspoon ground cinnamon',
        originalName: 'ground cinnamon',
        amount: 0.5,
        unit: 'teaspoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          },
          metric: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          }
        }
      },
      {
        id: 2011,
        aisle: 'Spices and Seasonings',
        image: 'cloves.jpg',
        consistency: 'solid',
        name: 'ground cloves',
        original: '1/2 teaspoon ground cloves',
        originalString: '1/2 teaspoon ground cloves',
        originalName: 'ground cloves',
        amount: 0.5,
        unit: 'teaspoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          },
          metric: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          }
        }
      },
      {
        id: 2025,
        aisle: 'Spices and Seasonings',
        image: 'ground-nutmeg.jpg',
        consistency: 'solid',
        name: 'ground nutmeg',
        original: '1/2 teaspoon ground nutmeg',
        originalString: '1/2 teaspoon ground nutmeg',
        originalName: 'ground nutmeg',
        amount: 0.5,
        unit: 'teaspoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          },
          metric: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          }
        }
      },
      {
        id: 1082047,
        aisle: 'Spices and Seasonings',
        image: 'salt.jpg',
        consistency: 'solid',
        name: 'kosher salt',
        original: '1/4 teaspoon kosher salt',
        originalString: '1/4 teaspoon kosher salt',
        originalName: 'kosher salt',
        amount: 0.25,
        unit: 'teaspoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.25,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          },
          metric: {
            amount: 0.25,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          }
        }
      },
      {
        id: 19336,
        aisle: 'Baking',
        image: 'powdered-sugar.jpg',
        consistency: 'solid',
        name: 'powdered sugar',
        original: '2 cups sifted powdered sugar',
        originalString: '2 cups sifted powdered sugar',
        originalName: 'sifted powdered sugar',
        amount: 2.0,
        unit: 'cups',
        meta: [
          'sifted'
        ],
        metaInformation: [
          'sifted'
        ],
        measures: {
          us: {
            amount: 2.0,
            unitShort: 'cups',
            unitLong: 'cups'
          },
          metric: {
            amount: 473.176,
            unitShort: 'ml',
            unitLong: 'milliliters'
          }
        }
      },
      {
        id: 2050,
        aisle: 'Baking',
        image: 'vanilla-extract.jpg',
        consistency: 'liquid',
        name: 'vanilla extract',
        original: '1/2 teaspoon vanilla extract',
        originalString: '1/2 teaspoon vanilla extract',
        originalName: 'vanilla extract',
        amount: 0.5,
        unit: 'teaspoon',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          },
          metric: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          }
        }
      },
      {
        id: 1077,
        aisle: 'Milk, Eggs, Other Dairy',
        image: 'milk.png',
        consistency: 'liquid',
        name: 'whole milk',
        original: '2 tablespoons whole milk',
        originalString: '2 tablespoons whole milk',
        originalName: 'whole milk',
        amount: 2.0,
        unit: 'tablespoons',
        meta: [
          'whole'
        ],
        metaInformation: [
          'whole'
        ],
        measures: {
          us: {
            amount: 2.0,
            unitShort: 'Tbsps',
            unitLong: 'Tbsps'
          },
          metric: {
            amount: 2.0,
            unitShort: 'Tbsps',
            unitLong: 'Tbsps'
          }
        }
      }
    ],
    id: 644693,
    title: 'Gingerbread Mummies',
    readyInMinutes: 45,
    servings: 18,
    sourceUrl: 'https://www.foodista.com/recipe/D5S56NHC/gingerbread-mummies',
    image: 'https://spoonacular.com/recipeImages/644693-556x370.jpg',
    imageType: 'jpg',
    summary: "Gingerbread Mummies might be just the dessert you are searching for. This recipe serves 18 and costs 30 cents per serving. One portion of this dish contains roughly <b>2g of protein</b>, <b>6g of fat</b>, and a total of <b>217 calories</b>. It is brought to you by Foodista. This recipe is liked by 40 foodies and cooks. Head to the store and pick up ground cinnamon, balsamic vinegar, , and a few other things to make it today. It is perfect for <b>Christmas</b>. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 16%</b>, which is not so awesome. <a href=\"https://spoonacular.com/recipes/marshmallow-mummies-521064\">Marshmallow Mummies</a>, <a href=\"https://spoonacular.com/recipes/mummies-on-a-stick-399721\">Mummies on a Stick</a>, and <a href=\"https://spoonacular.com/recipes/yummy-mummies-109761\">Yummy Mummies</a> are very similar to this recipe.",
    cuisines: [],
    dishTypes: [
      'dessert'
    ],
    diets: [
      'lacto ovo vegetarian'
    ],
    occasions: [
      'christmas'
    ],
    instructions: 'In a bowl of an electric mixer, beat the butter until light and fluffy.\nIn a separate small bowl, whisk together the flour, baking powder, ground ginger, baking soda, cinnamon, cloves, nutmeg and salt. Set aside.\nAdd the sugar to the butter and beat until light and fluffy. Turn the mixer to low and mix in the molasses, egg and balsamic vinegar. Slowly add the dry ingredients to the bowl and continue mixing until thoroughly combined.\nCover and chill about 2 hours or until the dough is easy to handle.\nPreheat oven to 400 degrees.\nDivide the dough in half and turn out onto a lightly floured surface. Roll each half of the dough to 1/4" thickness adding flour as needed, the dough is very sticky so use flour liberally to prevent your cutouts from sticking to the surface.\nUsing cookie cutters, cut dough into shapes and place on a baking sheet lined with parchment approximately 1" apart.\nBake in a 400 degree oven for 5-6 minutes. Cool on baking sheets for one minute and move to a wire rack.\nIn a small bowl, combine the powdered sugar, vanilla and milk. Whisk to combine. Spoon mixture into a pastry bag or zip top bag and snip off the tip. Add two small dots of icing where the eyes should be and then press one eye on each dot. Decorate the mummies using a zig-zag pattern across the surface of the cookie and allow to dry for 2-4 hours or overnight.\nStore in an airtight container.',
    analyzedInstructions: [
      {
        name: '',
        steps: [
          {
            number: 1,
            step: 'In a bowl of an electric mixer, beat the butter until light and fluffy.',
            ingredients: [
              {
                id: 1001,
                name: 'butter',
                localizedName: 'butter',
                image: 'butter-sliced.jpg'
              }
            ],
            equipment: [
              {
                id: 404628,
                name: 'hand mixer',
                localizedName: 'hand mixer',
                image: 'hand-mixer.png'
              },
              {
                id: 404783,
                name: 'bowl',
                localizedName: 'bowl',
                image: 'bowl.jpg'
              }
            ]
          },
          {
            number: 2,
            step: 'In a separate small bowl, whisk together the flour, baking powder, ground ginger, baking soda, cinnamon, cloves, nutmeg and salt. Set aside.',
            ingredients: [
              {
                id: 18369,
                name: 'baking powder',
                localizedName: 'baking powder',
                image: 'white-powder.jpg'
              },
              {
                id: 2021,
                name: 'ginger powder',
                localizedName: 'ginger powder',
                image: 'ginger.png'
              },
              {
                id: 18372,
                name: 'baking soda',
                localizedName: 'baking soda',
                image: 'white-powder.jpg'
              },
              {
                id: 2010,
                name: 'cinnamon',
                localizedName: 'cinnamon',
                image: 'cinnamon.jpg'
              },
              {
                id: 1002011,
                name: 'clove',
                localizedName: 'clove',
                image: 'cloves.jpg'
              },
              {
                id: 2025,
                name: 'nutmeg',
                localizedName: 'nutmeg',
                image: 'ground-nutmeg.jpg'
              },
              {
                id: 20081,
                name: 'all purpose flour',
                localizedName: 'all purpose flour',
                image: 'flour.png'
              },
              {
                id: 2047,
                name: 'salt',
                localizedName: 'salt',
                image: 'salt.jpg'
              }
            ],
            equipment: [
              {
                id: 404661,
                name: 'whisk',
                localizedName: 'whisk',
                image: 'whisk.png'
              },
              {
                id: 404783,
                name: 'bowl',
                localizedName: 'bowl',
                image: 'bowl.jpg'
              }
            ]
          },
          {
            number: 3,
            step: 'Add the sugar to the butter and beat until light and fluffy. Turn the mixer to low and mix in the molasses, egg and balsamic vinegar. Slowly add the dry ingredients to the bowl and continue mixing until thoroughly combined.',
            ingredients: [
              {
                id: 2069,
                name: 'balsamic vinegar',
                localizedName: 'balsamic vinegar',
                image: 'balsamic-vinegar.jpg'
              },
              {
                id: 19304,
                name: 'molasses',
                localizedName: 'molasses',
                image: 'molasses.jpg'
              },
              {
                id: 1001,
                name: 'butter',
                localizedName: 'butter',
                image: 'butter-sliced.jpg'
              },
              {
                id: 19335,
                name: 'sugar',
                localizedName: 'sugar',
                image: 'sugar-in-bowl.png'
              },
              {
                id: 1123,
                name: 'egg',
                localizedName: 'egg',
                image: 'egg.png'
              }
            ],
            equipment: [
              {
                id: 404726,
                name: 'blender',
                localizedName: 'blender',
                image: 'blender.png'
              },
              {
                id: 404783,
                name: 'bowl',
                localizedName: 'bowl',
                image: 'bowl.jpg'
              }
            ]
          },
          {
            number: 4,
            step: 'Cover and chill about 2 hours or until the dough is easy to handle.',
            ingredients: [
              {
                id: 0,
                name: 'dough',
                localizedName: 'dough',
                image: 'pizza-dough'
              }
            ],
            equipment: [],
            length: {
              number: 120,
              unit: 'minutes'
            }
          },
          {
            number: 5,
            step: 'Preheat oven to 400 degrees.',
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: 'oven',
                localizedName: 'oven',
                image: 'oven.jpg'
              }
            ]
          },
          {
            number: 6,
            step: 'Divide the dough in half and turn out onto a lightly floured surface.',
            ingredients: [
              {
                id: 0,
                name: 'dough',
                localizedName: 'dough',
                image: 'pizza-dough'
              }
            ],
            equipment: []
          },
          {
            number: 7,
            step: 'Roll each half of the dough to 1/4" thickness adding flour as needed, the dough is very sticky so use flour liberally to prevent your cutouts from sticking to the surface.',
            ingredients: [
              {
                id: 0,
                name: 'cut out cookies',
                localizedName: 'cut out cookies',
                image: ''
              },
              {
                id: 0,
                name: 'dough',
                localizedName: 'dough',
                image: 'pizza-dough'
              },
              {
                id: 20081,
                name: 'all purpose flour',
                localizedName: 'all purpose flour',
                image: 'flour.png'
              },
              {
                id: 0,
                name: 'roll',
                localizedName: 'roll',
                image: 'dinner-yeast-rolls.jpg'
              }
            ],
            equipment: []
          },
          {
            number: 8,
            step: 'Using cookie cutters, cut dough into shapes and place on a baking sheet lined with parchment approximately 1" apart.',
            ingredients: [
              {
                id: 10118192,
                name: 'cookies',
                localizedName: 'cookies',
                image: 'shortbread-cookies.jpg'
              },
              {
                id: 0,
                name: 'dough',
                localizedName: 'dough',
                image: 'pizza-dough'
              }
            ],
            equipment: [
              {
                id: 221429,
                name: 'cookie cutter',
                localizedName: 'cookie cutter',
                image: 'cookie-cutters.jpg'
              },
              {
                id: 404727,
                name: 'baking sheet',
                localizedName: 'baking sheet',
                image: 'baking-sheet.jpg'
              }
            ]
          },
          {
            number: 9,
            step: 'Bake in a 400 degree oven for 5-6 minutes. Cool on baking sheets for one minute and move to a wire rack.',
            ingredients: [],
            equipment: [
              {
                id: 404727,
                name: 'baking sheet',
                localizedName: 'baking sheet',
                image: 'baking-sheet.jpg'
              },
              {
                id: 405900,
                name: 'wire rack',
                localizedName: 'wire rack',
                image: 'wire-rack.jpg'
              },
              {
                id: 404784,
                name: 'oven',
                localizedName: 'oven',
                image: 'oven.jpg'
              }
            ],
            length: {
              number: 7,
              unit: 'minutes'
            }
          },
          {
            number: 10,
            step: 'In a small bowl, combine the powdered sugar, vanilla and milk.',
            ingredients: [
              {
                id: 19336,
                name: 'powdered sugar',
                localizedName: 'powdered sugar',
                image: 'powdered-sugar.jpg'
              },
              {
                id: 1052050,
                name: 'vanilla',
                localizedName: 'vanilla',
                image: 'vanilla.jpg'
              },
              {
                id: 1077,
                name: 'milk',
                localizedName: 'milk',
                image: 'milk.png'
              }
            ],
            equipment: [
              {
                id: 404783,
                name: 'bowl',
                localizedName: 'bowl',
                image: 'bowl.jpg'
              }
            ]
          },
          {
            number: 11,
            step: 'Whisk to combine. Spoon mixture into a pastry bag or zip top bag and snip off the tip.',
            ingredients: [],
            equipment: [
              {
                id: 404757,
                name: 'pastry bag',
                localizedName: 'pastry bag',
                image: 'pastry-bag.jpg'
              },
              {
                id: 404661,
                name: 'whisk',
                localizedName: 'whisk',
                image: 'whisk.png'
              }
            ]
          },
          {
            number: 12,
            step: 'Add two small dots of icing where the eyes should be and then press one eye on each dot. Decorate the mummies using a zig-zag pattern across the surface of the cookie and allow to dry for 2-4 hours or overnight.',
            ingredients: [
              {
                id: 10118192,
                name: 'cookies',
                localizedName: 'cookies',
                image: 'shortbread-cookies.jpg'
              },
              {
                id: 10019230,
                name: 'icing',
                localizedName: 'icing',
                image: 'frosting-or-icing.png'
              }
            ],
            equipment: [],
            length: {
              number: 240,
              unit: 'minutes'
            }
          },
          {
            number: 13,
            step: 'Store in an airtight container.',
            ingredients: [],
            equipment: []
          }
        ]
      }
    ],
    originalId: null,
    spoonacularSourceUrl: 'https://spoonacular.com/gingerbread-mummies-644693'
  }
})

export const mutations = {
  SET_CURRENT_RECIPES (state, payload) {
    state.currentRecipes = payload
  },
  SET_CURRENT_RECIPE (state, payload) {
    state.currentRecipe = payload
  }
}

export const actions = {
  async search (state, query) {
    const searchUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=6411032cc1b64ea0a7269e0da6e7fb58&query='
    const recipes = await this.$axios.$get(`${searchUrl}${query}`)
    state.commit('SET_CURRENT_RECIPES', recipes)
  },
  async getRandomRecipes (state) {
    const recipes = await this.$axios.$get('https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=6411032cc1b64ea0a7269e0da6e7fb58')
    state.commit('SET_CURRENT_RECIPES', recipes)
  },
  async getCurrentRecipe (state, id) {
    const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=6411032cc1b64ea0a7269e0da6e7fb58`
    const recipe = await this.$axios.$get(url)
    state.commit('SET_CURRENT_RECIPE', recipe)
  }
}
