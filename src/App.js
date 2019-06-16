import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
// import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';
import Billboard from './components/Billboard';
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
    // filteredItems: [],
    newSearch: {
      ingredients: ['eggs'],
      dietaryR: '',
      season: '',
      readyIn: null
    },
    stepCount: 0,
    margin: 0
  }
  onClickPopular = (e) => {
    // console.log(e.target.innerText);
    let ingredients = [...this.state.newSearch.ingredients, e.target.innerText];
    this.setState({
      newSearch: {
        ingredients
      }
    })
  }
  deleteIngredient = (token) => {
    // console.log(token);
    let ingredients = [...this.state.newSearch.ingredients].filter(ingredient => {
      return (ingredient !== token)
    });
    // console.log('deleteIngredient', ingredients)
    this.setState({
      newSearch: {
        ingredients
      }
    })
  }

  keyListener = (e) => {
    let value = e.target.value;
    console.log(value, e.keyCode);
    if (e.keyCode === 13 && value.length > 0) {
      let ingredients = [...this.state.newSearch.ingredients, value];
      console.log(ingredients);
      this.setState({
        newSearch: {
          ingredients
        }
      })
      e.target.value = '';
    }
    // // console.log(tokens);
  }
  
  nextStep = () => {
    // console.log(document.querySelector('.makeStyles-stepper-114'));
    let stepper = document.querySelector('.makeStyles-stepper-114');
    let stepCount = this.state.stepCount + 1;
    let margin = this.state.margin - 45;
    this.setState({
      stepCount,
      margin
    })
    stepper.style.cssText = `margin-left: ${margin}vw`;
    // let stepper = e.target.parentNode.parentNode.parentNode.children[0].children[0];
    // stepper.style.cssText = "margin-left: -45vw"; 
  }

  prevStep = () => {
    let stepper = document.querySelector('.makeStyles-stepper-114');
    let stepCount = this.state.stepCount -1 ;
    let margin = this.state.margin + 45;
    stepper.style.cssText = `margin-left: ${margin}vw`;
    this.setState({
      stepCount,
      margin
    })
    
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Billboard  state={this.state}
                    keyListener={this.keyListener}
                    onClickPopular={this.onClickPopular}
                    deleteIngredient={this.deleteIngredient} 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
          />

        {/* <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button> */}
      </ThemeProvider>
    );
  }
}
export default App;