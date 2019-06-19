import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import RecipeCard from './RecipeCard';
import { rgbToHex } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    heading: {
        //   fontFamily: theme.headings.fontFamily,
        marginBottom: '2rem',
        fontSize: '2.7rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: '.2rem'
    },
    mainPaper: {
        width: '90%',
        margin: '0 auto',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0px 0px 7px rgba(0,0,0,.2)',
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'no-wrap',
        // backgroundColor: '#e1e1e1',
        // border: '.1rem solid #ccc'
    },
    recipeResults: {
        width: '10000000px',
        
        
    }
}));

export default function Results(props) {
    const { recipes } = props;
    console.log(recipes);
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.heading}>Results</h1>
            <Paper className={classes.mainPaper}>
                <div className={classes.recipeResults}>
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>

            </Paper>
        </div>
    )
}
