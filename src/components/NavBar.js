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
    // [theme.breakpoints.down('md')]: {
    //   flexGrow: 4,
    //   backgroundColor: 'blue',
    //   flexFlow: 'column wrap',
    //   alignItems: 'left',
    //   justifyContent: 'flexStart',
    //   flex: '50%',
    // },
    // [theme.breakpoints.down('sm')]: {
    //   flexGrow: 4,
    //   backgroundColor: 'yellow',
    //   flexFlow: 'column wrap',
    //   alignItems: 'left',
    //   justifyContent: 'flexStart',
    //   flex: '25%',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   flexGrow: 4,
    //   backgroundColor: 'pink',
    //   flexFlow: 'column wrap',
    //   alignItems: 'left',
    //   justifyContent: 'flexStart',
    //   flex: '25%',
    //   float: 'none',
    //   // display: 'block',
    //   textAlign: 'left',
    // },
  },
  logo: {
    fontFamily: theme.headings.fontFamily,
    color: 'white',
    fontSize: '2.7rem',
    // [theme.breakpoints.down('sm')]: {
    //   flexGrow: 4,
    //   flexFlow: 'column nowrap',
    //   alignItems: 'left',
    //   justifyContent: 'flexStart',
    //   flex: '25%',
    //   // position: 'absolute',
    //   left: 0,
    //   top: 0,
    // },
  },
  loginBtn: {
    color: 'white',
    borderColor: 'white',
    // [theme.breakpoints.down('md')]: {
    //   alignItems: 'right',
    //   justifyContent: 'flexEnd',
    //   flex: 'column right'
    // },
  },
  appBar: {
      // position: 'fixed',
      // top: '0',
      // width: '100%',
      // behavior: 'smooth',
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'blue',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'yellow'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'pink'
    },
  },
  menuItemList: {
    display: 'none'
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
            <div className={classes.menuItemList}>
            {
              MenuItems.map((item, index) => {
                return <MenuItem item={item} key={index} />
              })
            }
            </div>
            
          </Typography>

          <Button variant="outlined" className={classes.loginBtn}>LOGIN</Button>

        </Toolbar>
      </AppBar>
    </div>
  )


}
export default NavBar;