import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';
import Billboard from './components/Billboard';
import Results from './components/Results';
import { filterRecipes } from './helpers'
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

class App extends Component {
  state = {
    popularItems: []
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Billboard />
        <SearchWindow/>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </ThemeProvider>
    );
  }
}
export default App;