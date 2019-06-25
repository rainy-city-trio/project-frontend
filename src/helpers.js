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
  // console.log('ingredientMatch', ingredientMatch);
  // console.log('ingredientsLength', ingredientsLength);
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
  let string = ' ' + ingArray.join(', ') + '';
  let lastElement = ingArray[ingArray.length - 2] + ", " + ingArray[ingArray.length - 1];
  let newElement = ingArray[ingArray.length - 2] + " and " + ingArray[ingArray.length - 1];
  string = string.replace(lastElement, newElement)
  return string
}

const filterSeason = (recipes, seasons) => {
  let filtered = [];
  if (seasons.length === 0) {
    return recipes;
  } else {
    recipes.forEach(recipe => {
      seasons.forEach(season => {
        if (recipe.seasonName.toLowerCase() === season.toLowerCase()) {
          filtered.push(recipe)
        }
      })
    })
    return filtered;
  }
}


module.exports = {
  capitalizeWords,
  checkIngredientMatch,
  sortRecipesByMatch,
  calcPercentage,
  ingredientsMatched,
  renderMatches,
  filterSeason
}