const capitalizeWords = (string) => {
  let capArray = string.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  })
  return capArray.join(' ')
}

const checkIngredientMatch = (recipes) => {
  const filtered = recipes.filter(recipe => {
    return recipe.ingredientMatch !== 0
  });
  return filtered
}

const sortRecipesByMatch = (recipes) => {
  let sorted = recipes.sort(function (a, b) { return (b.ingredientMatch - a.ingredientMatch) })
  return sorted
}

const calcPercentage = (ingredientMatch, ingredientsLength) => {
  const percentage = (ingredientMatch / ingredientsLength) * 100;
  return parseInt(percentage)
}

const ingredientsMatched = (ingredients, recipeIngredients) => {
  // ingredients = ['xxx', 'xxx']
  // recipeIngredients = [{ingredient: 'xxxx', qty: 'xxxx'}, {ingredient: 'xxxx', qty: 'xxxx'}]
  let matched = [];
  recipeIngredients.forEach(ing => {
    ingredients.forEach(elem => {
      if (ing.ingredient.includes(elem)) {
        matched.push(ing)
      }
    })
  })
  return matched
}

const renderMatches = (matched) => {
  let ingArray = [];
  matched.forEach(elem => {
    ingArray.push(elem.ingredient)
  })
  //   ingArray.splice(ingArray.length-1, 0, 'and');
  let string = ' ' + ingArray.join(', ') + '';
  let lastElement = ingArray[ingArray.length - 2] + ", " + ingArray[ingArray.length - 1];
  let newElement = ingArray[ingArray.length - 2] + " and " + ingArray[ingArray.length - 1];
  //   console.log(lastElement, newElement);
  string = string.replace(lastElement, newElement)
  return string
}

// const filterRecipes = (recipes, ingredients, seasons, special) => {
//   let filtered = [];
//   let filtI = [];
//   recipes.forEach((recipe, index, array) => {
//     ingredients.forEach(search => {
//       if (recipe.ingredients.indexOf(search) !== -1) {
//         filtI.push(recipe)
//       }
//     })
//   })
//   filtered = filtI;

//   if (seasons.length > 0) {
//     let filtS = []
//     filtered.forEach((recipe, index, array) => {
//       seasons.forEach(season => {
//         console.log(season)
//         if (recipe.season.toLowerCase() === season.toLowerCase()) {
//           filtS.push(recipe)
//         }
//       })
//     })
//     filtered = filtS;
//   }

//   if (special.length > 0) {
//     let filtSp = [];
//     filtered.forEach((recipe, index, array) => {
//       special.forEach(elem => {
//         if (recipe.special.toLowerCase() === elem.toLowerCase()) {
//           filtSp.push(recipe)
//         }
//       })
//     })
//     filtered = filtSp;
//   }
//   return filtered;
// }

module.exports = {
  capitalizeWords,
  checkIngredientMatch,
  sortRecipesByMatch,
  calcPercentage,
  ingredientsMatched,
  renderMatches
}