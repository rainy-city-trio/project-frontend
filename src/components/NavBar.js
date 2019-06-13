import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'
import MenuItem from './MenuItem';
import { makeStyles } from '@material-ui/core/styles'

const MenuItems = ['Recipes', 'Pantry', 'Meal Planner', 'Shopping List'];
const useStyles = makeStyles(theme => ({
  logo: {
    fontFamily: theme.headings.fontFamily,
    color: 'white',
    fontSize: '2.7rem'
  }
}));

const NavBar = () => {
    const classes = useStyles();
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
          <Typography variant="title" color="inherit">
            <Button color="white" className={classes.logo}>
                Zest
            </Button>
        </Typography>
            {
              MenuItems.map((item, index) => {
                return <MenuItem item={item} key={index} />
              })
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  

}
export default NavBar;