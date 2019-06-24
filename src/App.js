import React, { Component } from 'react';
import './App.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
// import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';
import Billboard from './components/Billboard';
import Results from './components/Results';
import { checkIngredientMatch, sortRecipesByMatch, filterSeason } from './helpers'
import Footer from './components/Footer';
import axios from 'axios';
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

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

class App extends Component {
  state = {
    popularItems: ['eggs', 'chicken', 'beef mince', 'lettuce', 'tomatoes', 'onions', 'milk', 'coffee', 'flour', 'spinach', 'cheddar cheese', 'bread', 'lemon', 'beans', 'bell peppers'],
    filteredRecipes: [],
    newSearch: {
      ingredients: [],
      dietary: 'none',
      seasons: []
    },
    stepCount: 0,
    margin: 0,
    resultsMargin: 0,
    resultStep: 1,
    recipeRequest: false
  }
  findRecipe = (newSearch) => {
    axios.post('https://6q4rpz2qb6.execute-api.eu-west-2.amazonaws.com/dev/recipe', newSearch)
  .then(res => {
    console.log(res.data)
    // console.log(newSearch.ingredients.length)
    let data = res.data;
    let filteredRecipes = checkIngredientMatch(data);
    filteredRecipes = filterSeason(filteredRecipes, newSearch.seasons);
    filteredRecipes = sortRecipesByMatch(filteredRecipes);
    // console.log(filteredRecipes);
    this.setState({
      filteredRecipes
    })
  })
  .catch(err => {
    console.log(err)
  })
    this.setState({recipeRequest: true})
    document.querySelector('#results').scrollIntoView({block: 'start', behavior: 'smooth'})
    // let recipes = [...this.state.recipes];
    let ingredients = [...this.state.newSearch.ingredients];
    // let special = this.state.newSearch.dietary;
    // let seasons = [...this.state.newSearch.seasons];
    if (ingredients.length === 0) {
      alert('please select some ingredients')
    }
    // // const filteredRecipes = filterRecipes(recipes, ingredients, seasons, special);
    // this.setState({
    //   filteredRecipes
    // })
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
    newSearch.dietary = 'none';
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
    if (newSearch.dietary.toLowerCase() !== req.toLowerCase()) {
      newSearch.dietary = req;
      this.setState({
        newSearch
      })
    } else {
      newSearch.dietary = 'none';
      this.setState({
        newSearch
      })
    }
    // if (newSearch.dietary.indexOf(req) === -1) {
    //   let dietaryR = [...this.state.newSearch.dietary, req];
    //   newSearch.dietary = dietaryR;
    //   this.setState({
    //     newSearch
    //   })
    // } else {
    //   let dietaryR = [...this.state.newSearch.dietary];
    //   dietaryR.splice(newSearch.dietary.indexOf(req), 1);
    //   newSearch.dietary = dietaryR;
    //   this.setState({
    //     newSearch
    //   })
    // }
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