


// tuna pasta bake --> Tuna Pasta Bake


//   import { faSnowflake, faSun, faSeedling } from '@fortawesome/free-solid-svg-icons'
// import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'





  const capitalizeWords = (string) => {
    let capArray = string.split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    return capArray.join(' ')
  }

  module.exports = {
      capitalizeWords
  }