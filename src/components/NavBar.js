import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'
import MenuItem from './MenuItem';
import { makeStyles } from '@material-ui/core/styles'
import './NavBar.css'

const MenuItems = ['Recipes', 'Pantry', 'Meal Planner', 'Shopping List'];
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuItems: {
    flexGrow: 1
  },
  logo: {
    fontFamily: theme.headings.fontFamily,
    color: 'white',
    fontSize: '2.7rem'
  },
  loginBtn: {
    color: 'white',
    borderColor: 'white'
  },
  appBar: {
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'blue',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'yellow'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'pink',
    },
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="navbar">
      <AppBar color="primary" className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.menuItems}>

            <Button color="white" className={classes.logo}>
              Zest
            </Button>
            {
              MenuItems.map((item, index) => {
                return <MenuItem item={item} key={index} />
              })
            }
          </Typography>

          <Button variant="outlined" className={classes.loginBtn}>LOGIN</Button>

        </Toolbar>
      </AppBar>
    </div>
  )


}
export default NavBar;