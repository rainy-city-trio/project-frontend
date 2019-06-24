import React from 'react'
import './../App.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { Chip, Divider, FormControl, RadioGroup, FormControlLabel, Switch, Fade } from '@material-ui/core';
// import { purple } from '@material-ui/core/colors';
// import HUE from '@material-ui/core/colors/HUE'; 
// import {deepOrange} from '@material-ui/core/colors'
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import './SearchWindow.css'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        marginBottom: '2rem'
    },
    input: {
        // marginLeft: 8,
        flex: 1
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    searchWindow: {
        // transition: 'all 2s',
        overflow: 'hidden',
        zIndex: 0,
        backgroundColor: 'white',
        // opacity: '.6',
        borderRadius: '.2rem',
        position: 'absolute',
        top: '17rem',
        left: '50%',
        // transform: 'translate(-50%, -50%)',
        width: '40vw',
        height: 'auto',
        padding: '2.2%',
        boxShadow: '0px 0px 10px rgba(0,0,0,.3)',
        marginBottom: 0,
        transition: 'top .2s linear'
        // border: '1px solid rgba(0,0,0,.1)'
    },
    textField: {
    },
    heading: {
        textTransform: 'uppercase',
        fontSize: '1.7rem',
        letterSpacing: '.2rem',
        color: '#272D2D',
        margin: '0rem'
        // marginTop: '2rem'
    },
    secondHeading: {
        textTransform: 'uppercase',
        fontSize: '1rem',
        letterSpacing: '.2rem',
        color: '#272D2D',
        // marginTop: '2rem'
    },
    button: {
        textTransform: 'lowercase',
        marginRight: '.5rem',
        marginBottom: '.5rem'
    },
    chip: {
        marginRight: '.3rem',
        marginBottom: '.3rem'
    },
    nextSubmit: {
        display: 'flex',
        width: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'space-between'
    },

    steppersContainer: {
        display: 'flex',
        width: '3000px',
        marginLeft: 0,
        // transition: 'margin-left 2s'
    },
    stepper: {
        width: '40vw',
        marginRight: '5vw',
        transition: 'all .4s'
    },
    group: {
        display: 'inline',
        marginTop: '.5rem',
        marginBottom: '2rem'
    },
    popular: {
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    thirdHeading: {
        textTransform: 'uppercase',
        fontSize: '1.1rem',
        letterSpacing: '.2rem',
        color: '#272D2D',
        margin: '0rem'
    },
    hiddenButton: {
        opacity: 0
    },
    hiddenSearch: {
        maxHeight: '0rem'
        // opacity: 0,
        // transition: 'height .3s'
    }
}));

const SearchWindow = (props) => {
    // constants and variables
    const { popularItems, newSearch, stepCount } = props.state;
    const reqs = ['Vegan', 'Vegetarian', 'Gluten-Free'];
    const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    const classes = useStyles();

    // popularRender filters out selected ingredients from the popular item list
    // if user enters a popular item in the new search, 
    // item will be filtered out from the popular item list
    let popularRender = popularItems.filter(item => {
        return newSearch.ingredients.indexOf(item) === -1
    });

    // rendering of (filtered) popular item list
    const popularItemList = popularRender.map((item, index) => {
        return <Button onClick={props.onClickPopular} className={classes.button} variant="outlined" key={index}>
            {item}
        </Button>
    })
    // rendering of all ingredients selected
    const tagList = newSearch.ingredients.map((token, index) => {
        return (<Fade in="true">
                    <Chip   label={token} 
                            variant="outlined" 
                            category="ingredients" 
                            className={classes.chip} 
                            key={index} 
                            onDelete={() => { props.deleteIngredient(token) }} />
                </Fade>)
    })
    // rendering of all requirements selected
    const reqList = (<Fade in="true">
                    <Chip   label={newSearch.dietary} 
                            variant="outlined" 
                            category="dietary" 
                            className={classes.chip}   
                            onDelete={() => { props.deleteReqs(newSearch.dietary) }} />
                </Fade>);

    // rendering of all seasons selected
    const seasonList = newSearch.seasons.map((season, index) => {
        return (<Fade in="true">
                    <Chip   label={season} 
                            variant="outlined" 
                            category="seasons" 
                            className={classes.chip} 
                            key={index} 
                            onDelete={() => { props.deleteSeason(season) }} />
                </Fade>)
    })
    return (
        <div className={`mainSearch ${classes.searchWindow} ${(newSearch.ingredients.length === 0 && newSearch.seasons.length === 0 && newSearch.dietary === 'none') ? ('') : ('bigWindow')}`}>
            <div className={classes.steppersContainer}>
                <div className={classes.stepper}>
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
                    <div className={classes.popular}>
                        {popularItemList}

                    </div>
                </div>
                <div className={classes.stepper}>


                    <FormControl>
                        <h1 className={classes.thirdHeading}>SPECIAL DIET</h1>
                        <RadioGroup
                            aria-label="special-diet"
                            name="special-diet"
                            className={classes.group}
                        >
                            {reqs.map(req => {
                                return (
                                    <FormControlLabel value={req} control={<Switch checked={(newSearch.dietary.includes(req)) ? (true) : (false)} />} label={req} onClick={() => { props.toggleSpecial(req) }} />
                                )
                            })}
                        </RadioGroup>
                        <h1 className={classes.thirdHeading}>Seasonal</h1>
                        <RadioGroup
                            aria-label="seasonal"
                            name="seasonal"
                            className={classes.group}
                        >
                            {seasons.map(season => {
                                return (
                                    <FormControlLabel value={season} control={<Switch checked={(newSearch.seasons.includes(season)) ? (true) : (false)} />} label={season} onClick={() => { props.toggleSeason(season) }} />
                                )
                            })}
                        </RadioGroup>
                        {/* <h1 className={classes.thirdHeading}>Ready In...</h1>
                        <RadioGroup
                            aria-label="ready-in"
                            name="ready-in"
                            className={classes.group}

                        >
                            <FormControlLabel value="Winter" control={<Switch />} label="< 20 minutes" />
                            <FormControlLabel value="Spring" control={<Switch />} label="20-30 minutes" />
                            <FormControlLabel value="Summer" control={<Switch />} label="30-40 minutes" />
                            <FormControlLabel value="Autumn" control={<Switch />} label="+40 minutes" />
                        </RadioGroup> */}
                    </FormControl>
                </div>
                
            </div>

            <div className={`prevNext ${classes.nextSubmit}`}>
                <Button variant="outlined" color="secondary" className={(stepCount === 0) ? (classes.hiddenButton) : ('')} onClick={props.prevStep} disabled={(stepCount === 0) ? (true) : (false)}>BACK</Button>
                <Button variant="outlined" color="secondary" className={classes.nextButton} onClick={(stepCount === 1) ? (() => {props.findRecipe(newSearch)}) : (props.nextStep)}>
                    {(stepCount === 1) ? ('FIND YOUR RECIPE') : ('NEXT')}
                </Button>
            </div>
            <section className={`${(newSearch.ingredients.length === 0 && newSearch.seasons.length === 0 && newSearch.dietary === 'none') ? (classes.hiddenSearch) : ('')}`}>
                <Divider className={classes.divider} variant="middle" />
                
                <section className={`${(newSearch.ingredients.length === 0) ? (classes.hiddenSearch) : ('')}`}>

                    <h2 className={classes.secondHeading}>Your items</h2>
                    {tagList}
                </section>
                <section className={`${(newSearch.dietary === 'none') ? (classes.hiddenSearch) : ('')}`}>

                    <h2 className={classes.secondHeading}>Your dietary requirements</h2>
                    {reqList}
                </section>
                <section className={`${(newSearch.seasons.length === 0) ? (classes.hiddenSearch) : ('')}`}>

                    <h2 className={classes.secondHeading}>your seasonal preference</h2>
                    {seasonList}
                </section>
            </section>
        </div>
    )


}
export default SearchWindow;