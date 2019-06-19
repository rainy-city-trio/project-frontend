import React from 'react'
import { makeStyles, Paper, Fab } from '@material-ui/core'
import RecipeCard from './RecipeCard';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRightOutlined";
const useStyles = makeStyles(theme => ({
    heading: {
        //   fontFamily: theme.headings.fontFamily,
        marginBottom: '2rem',
        fontSize: '2.7rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: '.2rem',
        color: '#272D2D'
    },
    mainPaper: {
        width: '74.5%',
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
        paddingLeft: '4.5rem'
    },
    chevronLeft: {
        backgroundColor: 'white',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '12vw',
        zIndex: '99999'
    },
    chevronRight: {
        backgroundColor: 'white',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '12vw',
        zIndex: '99999'
    },
    resultsContainer: {
        // border: '2px solid black',
        height: 'auto',
        marginBottom: '5rem',
        position: 'relative'
    }
}));

export default function Results(props) {
    const { recipes } = props;
    console.log(recipes);
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.heading}>Results</h1>
            <div className={classes.resultsContainer}>
                <Fab size="small" aria-label="Add" className={classes.chevronLeft}>
                    <ChevronLeftIcon />
                </Fab>
                <Fab size="small" aria-label="Add" className={classes.chevronRight}>
                    <ChevronRightIcon />
                </Fab>
                <Paper className={classes.mainPaper}>

                    <div className={classes.recipeResults}>
                        {
                            
                            recipes.map((recipe, index) => {
                                return <RecipeCard key={index} recipe={recipe} />
                            })
                        }
                    </div>
                </Paper>
            </div>
        </div>
    )
}
