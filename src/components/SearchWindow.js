import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { Chip, Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Switch } from '@material-ui/core';
// import {deepOrange} from '@material-ui/core/colors'
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

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
        width: 1,
        height: 28,
        margin: 4,
    },
    searchWindow: {
        overflow: 'hidden',
        zIndex: 0,
        backgroundColor: 'white',
        // opacity: '.6',
        borderRadius: '.2rem',
        position: 'absolute',
        top: '8rem',
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
        marginRight: '.3rem'
    },
    nextSubmit: {
        display: 'flex',
        width: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'space-between'
    },
    nextButton: {
        // marginTop: '1rem',
        marginBottom: '2rem'
    },
    steppersContainer: {
        display: 'flex',
        width: '3000px',
        marginLeft: 0,
        transition: 'margin-left 2s'
    },
    stepper: {
        width: '40vw',
        marginRight: '5vw',
        transition: 'all .4s'
    },
    group: {
        display: 'inline',
        marginTop: '.5rem',
        marginBottom: '1rem'
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
    }
}));

const SearchWindow = (props) => {
    console.log('search', props.state);
    const { popularItems, newSearch } = props.state;



    const classes = useStyles();

    let popularRender = popularItems.filter(item => {
        return newSearch.ingredients.indexOf(item) === -1
    });
    console.log('popularRender', popularRender)

    const popularItemList = popularRender.map((item, index) => {
        return <Button onClick={props.onClickPopular} className={classes.button} variant="outlined" key={index}>
            {item}
        </Button>
    })
    const tagList = newSearch.ingredients.map((token, index) => {
        return <Chip label={token} className={classes.chip} key={index} onDelete={() => { props.deleteIngredient(token) }} />
    })
    return (
        <div className={classes.searchWindow}>
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
                            
                            <FormControlLabel value="Vegetarian" control={<Switch />} label="Vegetarian" />
                            <FormControlLabel value="Vegan" control={<Switch />} label="Vegan" />
                            <FormControlLabel value="Gluten-Free" control={<Switch />} label="Gluten-Free" />
                            <FormControlLabel value="Dairy-Free" control={<Switch />} label="Dairy-Free" />
                            <FormControlLabel value="Nut-Free" control={<Switch />} label="Nut-Free" />
                        </RadioGroup>
                        <h1 className={classes.thirdHeading}>Seasonal</h1>
                        <RadioGroup
                            aria-label="seasonal"
                            name="seasonal"
                            className={classes.group}

                        >
                            <FormControlLabel value="Winter" control={<Switch />} label="Winter" />
                            <FormControlLabel value="Spring" control={<Switch />} label="Spring" />
                            <FormControlLabel value="Summer" control={<Switch />} label="Summer" />
                            <FormControlLabel value="Autumn" control={<Switch />} label="Autumn" />
                        </RadioGroup>
                        <h1 className={classes.thirdHeading}>Ready In...</h1>
                        <RadioGroup
                            aria-label="ready-in"
                            name="ready-in"
                            className={classes.group}

                        >
                            <FormControlLabel value="Winter" control={<Switch />} label="< 20 minutes" />
                            <FormControlLabel value="Spring" control={<Switch />} label="20-30 minutes" />
                            <FormControlLabel value="Summer" control={<Switch />} label="30-40 minutes" />
                            <FormControlLabel value="Autumn" control={<Switch />} label="+40 minutes" />
                        </RadioGroup>
                    </FormControl>
                </div>
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

                    <h1 className={classes.heading}>Third Window</h1>
                    {popularItemList}
                </div>
            </div>

            <div className={classes.nextSubmit}>
                <Button variant="outlined" color="secondary" className={classes.nextButton} onClick={props.prevStep}>BACK</Button>

                <Button variant="outlined" color="secondary" className={classes.nextButton} onClick={props.nextStep}>NEXT</Button>
            </div>
            <Divider variant="middle" />
            <h2 className={classes.secondHeading}>Your recipe will have...</h2>
            {tagList}
        </div>
    )


}
export default SearchWindow;