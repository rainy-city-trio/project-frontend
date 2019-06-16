import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'
import MenuItem from './MenuItem';
import { makeStyles } from '@material-ui/core/styles'

const MenuItems = ['Recipes', 'Pantry', 'Meal Planner', 'Shopping List'];
const useStyles = makeStyles(theme => ({
  containerNavbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    fontFamily: theme.headings.fontFamily,
    color: 'white',
    fontSize: '2.7rem'
  },
  loginBtn: {
    color: 'white',
    borderColor: 'white'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar color="primary" className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <div className={classes.containerNavbar}>
              <div className="leftCorner">
                <Button color="white" className={classes.logo}>
                  Zest
            </Button>
                {
                  MenuItems.map((item, index) => {
                    return <MenuItem item={item} key={index} />
                  })
                }
              </div>
              <div className="rightCorner">
                <Button variant="outlined" className={classes.loginBtn}>LOGIN</Button>

              </div>
            </div>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )


}
export default NavBar;