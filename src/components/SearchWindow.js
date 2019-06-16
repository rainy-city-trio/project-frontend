import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { Chip } from '@material-ui/core';
// import {deepOrange} from '@material-ui/core/colors'
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
    },
    input: {
        // marginLeft: 8,
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
        zIndex: 0,
        backgroundColor: 'white',
        // opacity: '.6',
        borderRadius: '.2rem',
        position: 'absolute',
        top: '10rem',
        left: '50%',
        // transform: 'translate(-50%, -50%)',
        width: '40vw',
        height: 'auto',
        padding: '2.2%',
        boxShadow: '0px 0px 10px rgba(0,0,0,.3)',
        marginBottom: 0
        // border: '1px solid rgba(0,0,0,.1)'
    },
    textField: {
    },
    heading: {
        textTransform: 'uppercase',
        fontSize: '1.7rem',
        letterSpacing: '.2rem',
        color: '#272D2D',
        marginTop: '2rem'
    },
    secondHeading: {
        textTransform: 'uppercase',
        fontSize: '1rem',
        letterSpacing: '.2rem',
        color: '#272D2D',
        marginTop: '2rem'
    },
    button: {
        textTransform: 'lowercase',
        marginRight: '.5rem',
        marginBottom: '.5rem'
    },
    chip: {
        marginRight: '.3rem'
    },
    nextSubmit: {
        display: 'flex',
        width: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'flex-end'
    },
    nextButton: {
        marginTop: '1rem',

    }
}));



const SearchWindow = (props) => {
    console.log('search', props.state);
    const { popularItems, newSearch } = props.state;
     
    // const tokenState = useState([]);
    // console.log('props', props);
    
    const classes = useStyles();
    const popularItemList = popularItems.map((item, index) => {
        return <Button className={classes.button} variant="outlined" key={index}>
            {item}
        </Button>
    })
    const tagList = newSearch.ingredients.map(token => {
        return <Chip label={token} className={classes.chip} onDelete={props.keyListener} />
    })
    return (
        <div className={classes.searchWindow}>
            <div>

            </div>
            <Paper className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="Menu">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    onKeyUp={props.keyListener}
                    className={classes.input}
                    placeholder="what's in your pantry?"
                    inputProps={{ 'aria-label': 'What\'s in your pantry?' }}
                />
                <IconButton className={classes.iconButton} aria-label="Search">
                    <MicIcon />
                </IconButton>

            </Paper>

            <h1 className={classes.heading}>Popular Items</h1>
            {popularItemList}
            <div className={classes.nextSubmit}>
                <Button variant="contained" color="secondary" className={classes.nextButton}>NEXT</Button>
            </div>
            <h2 className={classes.secondHeading}>Your recipe will include:</h2>
            {tagList}
        </div>
    )


}
export default SearchWindow;