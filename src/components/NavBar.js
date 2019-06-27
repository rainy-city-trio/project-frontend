import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'
import MenuItem from './MenuItem';
import { makeStyles } from '@material-ui/core/styles'

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
  menuItemList: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
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
            <span className={classes.menuItemList}>
              {
                MenuItems.map((item, index) => {
                  return <MenuItem item={item} key={index} />
                })
              }
            </span>
          </Typography>
          <Button variant="outlined" className={classes.loginBtn}>LOGIN</Button>
        </Toolbar>
      </AppBar>
    </div>
  )


}
export default NavBar;