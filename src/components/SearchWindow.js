import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
    searchWindow: {
        backgroundColor: 'white',
        opacity: '1',
        borderRadius: '.2rem',
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '40%',
        padding: '2rem',
    },
    textField: {
    },
    heading: {
        textTransform: 'uppercase',
        fontSize: '2rem',
        letterSpacing: '.2rem',
                color: '#272D2D'
    }
}));

const SearchWindow = () => {
    const classes = useStyles();
    return (
        <div className={classes.searchWindow}>
        <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="Menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'Search Google Maps' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
     
    </Paper>
        </div>
    )


}
export default SearchWindow;