import React, { Component } from 'react';
import './App.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
// import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';
import Billboard from './components/Billboard';
import Results from './components/Results';
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
      {id: 1, title: 'tuna pasta bake', description: 'Whip up this cheap treat using storecupboard ingredients, tinned tuna and sweetcorn' ,ingredients: ['pasta', 'butter', 'plain flour', 'milk', 'cheddar cheese', 'tuna', 'sweetcorn', 'parsley'], image: 'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/439/letterbox_tuna-Pasta-Bake593.jpg', url: "www.bbcgoodfood.com/recipes/9649/tuna-pasta-bake", prepTime: 30, special: 'vegan', season: 'summer'},
      {id: 2, title: 'tuna pasta bake', description: 'Whip up this cheap treat using storecupboard ingredients, tinned tuna and sweetcorn' ,ingredients: ['pasta', 'butter', 'plain flour', 'milk', 'cheddar cheese', 'tuna', 'sweetcorn', 'parsley'], image: 'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/439/letterbox_tuna-Pasta-Bake593.jpg', url: "www.bbcgoodfood.com/recipes/9649/tuna-pasta-bake", prepTime: 30, special: 'vegetarian', season: 'spring'},
      {id: 3, title: 'tuna pasta bake', description: 'Whip up this cheap treat using storecupboard ingredients, tinned tuna and sweetcorn' ,ingredients: ['pasta', 'butter', 'plain flour', 'milk', 'cheddar cheese', 'tuna', 'sweetcorn', 'parsley'], image: 'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/439/letterbox_tuna-Pasta-Bake593.jpg', url: "www.bbcgoodfood.com/recipes/9649/tuna-pasta-bake", prepTime: 30, special: 'gluten-free', season: 'winter'},
      {id: 4, title: 'tuna pasta bake', description: 'Whip up this cheap treat using storecupboard ingredients, tinned tuna and sweetcorn' ,ingredients: ['pasta', 'butter', 'plain flour', 'milk', 'cheddar cheese', 'tuna', 'sweetcorn', 'parsley'], image: 'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/439/letterbox_tuna-Pasta-Bake593.jpg', url: "www.bbcgoodfood.com/recipes/9649/tuna-pasta-bake", prepTime: 30, special: '', season: 'autumn'},


    ],
    newSearch: {
      ingredients: [],
      dietaryR: [],
      seasons: [],
      readyIn: null
    },
    stepCount: 0,
    margin: 0
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
        <Billboard state={this.state}
          keyListener={this.keyListener}
          onClickPopular={this.onClickPopular}
          deleteIngredient={this.deleteIngredient}
          deleteSeason={this.deleteSeason}
          deleteReqs={this.deleteReqs}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          toggleSpecial={this.toggleSpecial}
          toggleSeason={this.toggleSeason}
        />
        <Results recipes={this.state.recipes}/>
      </ThemeProvider>
    );
  }
}
export default App;