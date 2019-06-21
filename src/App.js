import React, { Component } from 'react';
import './App.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
// import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';
import Billboard from './components/Billboard';
import Results from './components/Results';
import { filterRecipes } from './helpers'
import Footer from './components/Footer';
// import SearchWindow from './components/SearchWindow';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF3D00',
    },
    secondary: blue
  },
  searchWindow: {
    backgroundColor: 'white'
  },
  headings: {
    fontFamily: 'Abril Fatface'
  }
});

class App extends Component {
  state = {
    popularItems: ['eggs', 'chicken', 'beef mince', 'lettuce', 'tomatoes', 'onions', 'milk', 'coffee', 'flour', 'spinach', 'cheddar cheese', 'bread', 'lemon', 'beans', 'bell peppers'],
    recipes: [
      {id: 1, title: 'thai green vegetable curry with lime', ingredients: ['aubergine', 'coconut cream', 'fresh ginger root', 'lime', 'red chilli', 'roasted peanuts', 'sugar snap peas', 'vegetable stock cube', 'tenderstem broccoli', 'kaffir lime leaves', 'green curry paste', 'basmati rice'], image: 'https://production-media.gousto.co.uk/cms/mood-image/1102.-Thai_Green-Vegetable_Curry-With-Lime-x750.jpg', url: "https://www.gousto.co.uk/cookbook/vegan-recipes/thai-green-vegetable-curry-with-lime", prepTime: 30, special: 'gluten-free', season: 'winter', method: 'Add the basmati rice and 300ml [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-15 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving. Meanwhile, peel (scrape the skin off with a teaspoon) and finely chop (or grate) the ginger. Finely slice 1/2 [1] red chilli into rounds and set them aside for garnish. Cut the remaining chilli in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely. Trim the green stalks off the aubergine[s] and cut it into bite-sized pieces'},
      {id: 2, title: 'thai green vegetable curry with lime', ingredients: ['aubergine', 'coconut cream', 'fresh ginger root', 'lime', 'red chilli', 'roasted peanuts', 'sugar snap peas', 'vegetable stock cube', 'tenderstem broccoli', 'kaffir lime leaves', 'green curry paste', 'basmati rice'], image: 'https://production-media.gousto.co.uk/cms/mood-image/1102.-Thai_Green-Vegetable_Curry-With-Lime-x750.jpg', url: "https://www.gousto.co.uk/cookbook/vegan-recipes/thai-green-vegetable-curry-with-lime", prepTime: 30, special: 'vegetarian', season: 'summer', method: 'Add the basmati rice and 300ml [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-15 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving. Meanwhile, peel (scrape the skin off with a teaspoon) and finely chop (or grate) the ginger. Finely slice 1/2 [1] red chilli into rounds and set them aside for garnish. Cut the remaining chilli in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely. Trim the green stalks off the aubergine[s] and cut it into bite-sized pieces'},
      {id: 3, title: 'thai green vegetable curry with lime', ingredients: ['aubergine', 'coconut cream', 'fresh ginger root', 'lime', 'red chilli', 'roasted peanuts', 'sugar snap peas', 'vegetable stock cube', 'tenderstem broccoli', 'kaffir lime leaves', 'green curry paste', 'basmati rice'], image: 'https://production-media.gousto.co.uk/cms/mood-image/1102.-Thai_Green-Vegetable_Curry-With-Lime-x750.jpg', url: "https://www.gousto.co.uk/cookbook/vegan-recipes/thai-green-vegetable-curry-with-lime", prepTime: 30, special: 'vegan', season: 'autumn', method: 'Add the basmati rice and 300ml [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-15 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving. Meanwhile, peel (scrape the skin off with a teaspoon) and finely chop (or grate) the ginger. Finely slice 1/2 [1] red chilli into rounds and set them aside for garnish. Cut the remaining chilli in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely. Trim the green stalks off the aubergine[s] and cut it into bite-sized pieces'},
      {id: 4, title: 'thai green vegetable curry with lime', ingredients: ['aubergine', 'coconut cream', 'fresh ginger root', 'lime', 'red chilli', 'roasted peanuts', 'sugar snap peas', 'vegetable stock cube', 'tenderstem broccoli', 'kaffir lime leaves', 'green curry paste', 'basmati rice'], image: 'https://production-media.gousto.co.uk/cms/mood-image/1102.-Thai_Green-Vegetable_Curry-With-Lime-x750.jpg', url: "https://www.gousto.co.uk/cookbook/vegan-recipes/thai-green-vegetable-curry-with-lime", prepTime: 30, special: 'vegetarian', season: 'spring', method: 'Add the basmati rice and 300ml [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-15 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving. Meanwhile, peel (scrape the skin off with a teaspoon) and finely chop (or grate) the ginger. Finely slice 1/2 [1] red chilli into rounds and set them aside for garnish. Cut the remaining chilli in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely. Trim the green stalks off the aubergine[s] and cut it into bite-sized pieces'},
      {id: 5, title: 'thai green vegetable curry with lime', ingredients: ['aubergine', 'coconut cream', 'fresh ginger root', 'lime', 'red chilli', 'roasted peanuts', 'sugar snap peas', 'vegetable stock cube', 'tenderstem broccoli', 'kaffir lime leaves', 'green curry paste', 'basmati rice'], image: 'https://production-media.gousto.co.uk/cms/mood-image/1102.-Thai_Green-Vegetable_Curry-With-Lime-x750.jpg', url: "https://www.gousto.co.uk/cookbook/vegan-recipes/thai-green-vegetable-curry-with-lime", prepTime: 30, special: 'gluten-free', season: 'summer', method: 'Add the basmati rice and 300ml [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-15 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving. Meanwhile, peel (scrape the skin off with a teaspoon) and finely chop (or grate) the ginger. Finely slice 1/2 [1] red chilli into rounds and set them aside for garnish. Cut the remaining chilli in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely. Trim the green stalks off the aubergine[s] and cut it into bite-sized pieces'},
      {id: 6, title: 'thai green vegetable curry with lime', ingredients: ['aubergine', 'coconut cream', 'fresh ginger root', 'lime', 'red chilli', 'roasted peanuts', 'sugar snap peas', 'vegetable stock cube', 'tenderstem broccoli', 'kaffir lime leaves', 'green curry paste', 'basmati rice'], image: 'https://production-media.gousto.co.uk/cms/mood-image/1102.-Thai_Green-Vegetable_Curry-With-Lime-x750.jpg', url: "https://www.gousto.co.uk/cookbook/vegan-recipes/thai-green-vegetable-curry-with-lime", prepTime: 30, special: 'gluten-free', season: 'summer', method: 'Add the basmati rice and 300ml [600ml] cold water to a pot with a lid and bring to the boil over a high heat. Once boiling, reduce the heat to very low and cook, covered, for 10-15 min or until all the water has absorbed and the rice is cooked. Once cooked, remove from the heat and keep covered until serving. Meanwhile, peel (scrape the skin off with a teaspoon) and finely chop (or grate) the ginger. Finely slice 1/2 [1] red chilli into rounds and set them aside for garnish. Cut the remaining chilli in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely. Trim the green stalks off the aubergine[s] and cut it into bite-sized pieces'},


    ],
    filteredRecipes: [],
    newSearch: {
      ingredients: [],
      dietaryR: [],
      seasons: [],
      readyIn: null
    },
    stepCount: 0,
    margin: 0,
    resultsMargin: 0,
    resultStep: 1,
    recipeRequest: false
  }
  findRecipe = () => {
    this.setState({recipeRequest: true})
    document.querySelector('#results').scrollIntoView({block: 'start', behavior: 'smooth'})
    let recipes = [...this.state.recipes];
    let ingredients = [...this.state.newSearch.ingredients];
    let special = [...this.state.newSearch.dietaryR];
    let seasons = [...this.state.newSearch.seasons];
    if (ingredients.length === 0) {
      alert('please select some ingredients')
    }
    const filteredRecipes = filterRecipes(recipes, ingredients, seasons, special);
    this.setState({
      filteredRecipes
    })
  }
  navResult = (e) => {
    let firstResult = document.querySelector('.recipeCard');
    let resultsMargin = this.state.resultsMargin;
    let resultStep = this.state.resultStep;
    if (e === 'left') {
      resultsMargin += 71;
      resultStep -= 1;
    } else if (e === 'right') {
      resultsMargin -= 71;
      resultStep += 1;
    }
    firstResult.style.cssText = `margin-left: ${resultsMargin}vw`;
    this.setState({
      resultsMargin,
      resultStep
    })
  }
  onClickPopular = (e) => {
    let newSearch = { ...this.state.newSearch };
    let ingredients = [...this.state.newSearch.ingredients, e.target.innerText];
    newSearch.ingredients = ingredients;
    this.setState({
      newSearch
    })
  }
  deleteIngredient = (token) => {
    let newSearch = { ...this.state.newSearch };
    let ingredients = [...this.state.newSearch.ingredients].filter(ingredient => {
      return (ingredient !== token)
    });
    newSearch.ingredients = ingredients;
    this.setState({
      newSearch
    })
  }
  deleteSeason = (token) => {
    let newSearch = { ...this.state.newSearch };
    let seasons = [...this.state.newSearch.seasons].filter(season => {
      return (season !== token)
    });
    newSearch.seasons = seasons;
    this.setState({
      newSearch
    })
  }
  deleteReqs = (token) => {
    let newSearch = { ...this.state.newSearch };
    let reqs = [...this.state.newSearch.dietaryR].filter(req => {
      return (req !== token)
    });
    newSearch.dietaryR = reqs;
    this.setState({
      newSearch
    })
  }
  keyListener = (e) => {    // console.log(document.querySelector('.makeStyles-stepper-114'));
    let value = e.target.value;
    if (e.keyCode === 13 && value.length > 0) {
      let newSearch = { ...this.state.newSearch };
      let ingredients = [...this.state.newSearch.ingredients, value];
      newSearch.ingredients = ingredients;
      this.setState({
        newSearch
      })
      e.target.value = '';
    }
  }
  nextStep = () => {
    if (this.state.newSearch.ingredients.length === 0) {
      alert('no ingredients selected!')
    } else {
      let stepper = document.querySelector('.mainSearch > div > div');
      let stepCount = this.state.stepCount + 1;
      let margin = this.state.margin - 45;
      this.setState({
        stepCount,
        margin
      })
      stepper.style.cssText = `margin-left: ${margin}vw`;
    }

  }
  prevStep = () => {
    let stepper = document.querySelector('.mainSearch > div > div');
    
    let stepCount = this.state.stepCount - 1;
    let margin = this.state.margin + 45;
    stepper.style.cssText = `margin-left: ${margin}vw`;
    this.setState({
      stepCount,
      margin
    })

  }
  toggleSpecial = (req) => {
    let newSearch = { ...this.state.newSearch };
    if (newSearch.dietaryR.indexOf(req) === -1) {
      let dietaryR = [...this.state.newSearch.dietaryR, req];
      newSearch.dietaryR = dietaryR;
      this.setState({
        newSearch
      })
    } else {
      let dietaryR = [...this.state.newSearch.dietaryR];
      dietaryR.splice(newSearch.dietaryR.indexOf(req), 1);
      newSearch.dietaryR = dietaryR;
      this.setState({
        newSearch
      })
    }
  }
  toggleSeason = (season) => {
    let newSearch = { ...this.state.newSearch };
    if (newSearch.seasons.indexOf(season) === -1) {
      let seasons = [...this.state.newSearch.seasons, season];
      newSearch.seasons = seasons;
      this.setState({
        newSearch
      })
    } else {
      let seasons = [...this.state.newSearch.seasons];
      seasons.splice(newSearch.seasons.indexOf(season), 1);
      newSearch.seasons = seasons;
      this.setState({
        newSearch
      })
    }

  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Billboard  state={this.state}
                    keyListener={this.keyListener}
                    onClickPopular={this.onClickPopular}
                    deleteIngredient={this.deleteIngredient}
                    deleteSeason={this.deleteSeason}
                    deleteReqs={this.deleteReqs}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    toggleSpecial={this.toggleSpecial}
                    toggleSeason={this.toggleSeason}
                    findRecipe={this.findRecipe}
          
        />
        <Results    
                    state={this.state}
                    navResult={this.navResult}/>
        <Footer />           
      </ThemeProvider>
    );
  }
}
export default App;