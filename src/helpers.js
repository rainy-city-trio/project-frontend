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
  checkIngredientMatch
  // filterRecipes
}