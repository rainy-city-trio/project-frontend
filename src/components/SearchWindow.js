import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
      },
      input: {
        marginLeft: 8,
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        width: 1,
        height: 28,
        margin: 4,
      },
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
                    inputProps={{ 'aria-label': 'What is in your pantry?' }}
                />
                <IconButton className={classes.iconButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>

            </Paper>
        </div>
    )


}
export default SearchWindow;