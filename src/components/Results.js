import React from 'react'
import { makeStyles, Paper, Fab, Chip, createMuiTheme } from '@material-ui/core'

import { teal, orange } from '@material-ui/core/colors/'
import RecipeCard from './RecipeCard';
// import BlankRecipeCard from './BlankRecipeCard'
import ChevronLeftIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRightOutlined";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpwardOutlined';

const useStyles = makeStyles(theme => ({
    overlay: {
        position: 'absolute',
        width: '74.5%',
        backgroundColor: 'red',
        height: '10rem',
        display: 'none'
    },
    rootHidden: {
        opacity: 0,
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            marginTop: '12rem'
        }
    },
    rootShow: {
        opacity: 1,
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            marginTop: '20rem'
        }
    },
    heading: {
        fontFamily: theme.headings.fontFamily,
        marginTop: '7rem',
        marginBottom: '.3rem',
        fontSize: '4rem',
        textTransform: 'capitalize',
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#272D2D'
    },
    mainPaper: {
        width: '80vw',
        margin: '0 auto',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        // marginBottom: '2rem',
        boxShadow: '0px 0px 7px rgba(0,0,0,.2)',
        // overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'no-wrap',
        position: 'relative'
        // backgroundColor: '#e1e1e1',
        // border: '.1rem solid #ccc'
    },
    recipeResults: {
        width: '10000000px',
        marginLeft: '4.5vw',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
        // height: '21rem'
    },
    chevronLeft: {
        backgroundColor: 'white',
        position: 'absolute',
        top: '50%',
        // transform: 'translateY(-50%)',
        left: '9vw',
        zIndex: '99999'
    },
    chevronHidden: {
        backgroundColor: 'white',
        position: 'absolute',
        top: '50%',
        // transform: 'translateY(-50%)',
        left: '9vw',
        zIndex: '99999',
        opacity: 0
    },
    chevronRight: {
        backgroundColor: 'white',
        position: 'absolute',
        top: '50%',
        // transform: 'translateY(-50%)',
        right: '9vw',
        zIndex: '99999'
    },
    resultsContainer: {
        height: 'auto',
        marginTop: '2rem',
        // marginBottom: 'em',
        position: 'relative'
    },
    results: {
        // fontFamily: theme.headings.fontFamily,
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#757575',
        marginTop: '.3rem'
    },
    tagContainer: {
        display: 'flex',
        width: '50%',
        margin: '0 auto',
        justifyContent: 'center'
    },
    chip: {
        marginRight: '0.5rem'
    },
    hiddenResults: {
        display: 'none'
    }
}));

export default function Results(props) {
    const { resultStep, filteredRecipes, recipeRequest, newSearch } = props.state;
    let steps;
    if (filteredRecipes.length % 3 === 0) {
        steps = Math.floor(filteredRecipes.length / 3) - 1
    } else {
        steps = Math.floor(filteredRecipes.length / 3)
    }

    const theme = createMuiTheme({
        palette: {
            primary: teal,
            secondary: orange
        },
    });

    const classes = useStyles();
    const handleClick = () => {
        document.querySelector('#navbar').scrollIntoView({ behavior: 'smooth' })
    }
    // console.log('filtered before map', filteredRecipes)
    const results = filteredRecipes.map((recipe, index) => {
        return <RecipeCard key={index} newSearch={newSearch} recipe={recipe} />
    });
console.log(theme)
   
    return (
        <div className={(recipeRequest === false) ? (classes.rootHidden) : (classes.rootShow)}>
            <h1 className={classes.heading} id="results">Results</h1>
            <h4 className={classes.results}>You have {filteredRecipes.length} results</h4>
            <div className={classes.tagContainer}>
                {newSearch.ingredients.map(ing => {
                    return (<Chip className={classes.chip} label={ing} />)
                })}
                {newSearch.seasons.map(season => {
                    return (<Chip color="primary" className={classes.chip} label={season} />)
                })}

                <Chip color="secondary" className={classes.chip} label={newSearch.dietary} />

                <Chip label="Refine Search" variant="outlined" onClick={handleClick} className={classes.refineSearch} icon={<ArrowUpwardIcon />} />
            </div>

            <div className={(filteredRecipes.length === 0) ? (classes.hiddenResults) : (classes.resultsContainer)}>
                <div className={classes.overlay}>

                </div>
                <Fab size="small" aria-label="Add" disabled={(resultStep === 1) ? (true) : (false)} onClick={() => { props.navResult('left') }} className={(resultStep === 1) ? (classes.chevronHidden) : (classes.chevronLeft)}>
                    <ChevronLeftIcon />
                </Fab>
                <Fab size="small" aria-label="Add" disabled={(resultStep > steps) ? (true) : (false)} onClick={() => { props.navResult('right') }} className={(resultStep > steps) ? (classes.chevronHidden) : (classes.chevronRight)}>
                    <ChevronRightIcon />
                </Fab>
                <Paper className={classes.mainPaper}>

                    <div className={classes.recipeResults}>

                        {
                            results
                        }
                    </div>
                </Paper>
            </div>
        </div>
    )
}
