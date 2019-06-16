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
    popularItems: ['eggs', 'chicken breasts', 'lettuce', 'tomatoes', 'onions', 'milk', 'coffee', 'flour', 'spinach', 'cheddar cheese', 'bread', 'lemon'],
    newSearch: {
      ingredients: [],
      dietaryR: '',
      season: '',
      readyIn: null
    }
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
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Billboard props={this.state} />
        
        {/* <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button> */}
      </ThemeProvider>
    );
  }
}
export default App;