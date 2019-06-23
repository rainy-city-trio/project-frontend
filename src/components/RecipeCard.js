import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardActionArea, Button } from '@material-ui/core';
import { capitalizeWords } from './../helpers'
import { faSnowflake, faSeedling, faSun } from '@fortawesome/free-solid-svg-icons'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 365,
        width: 365,
        display: 'inline-block',
        marginRight: '4.5rem',
        boxShadow: '0px 0px 4px rgba(0,0,0,.7)',
        transition: 'all .3s linear',
        '&:hover': {
            transition: 'all .3s linear',
            boxShadow: '0px 0px 10px rgba(0,0,0,.3)'
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    icon: {
        marginRight: '.2rem'
    },
    glutenIcon: {
        marginRight: '.2rem',
    },
    cardActions: {
        justifyContent: 'center'
    },
    center: {
        textAlign: 'center'
    },
    recipeDescription: {
        display: 'flex',
        flexDirection: 'column',
        height: '230px',
    alignItems: 'center',
    justifyContent: 'center'
        // alignItems: 'flex-end'
    },
    recipeTitle: {
        width: '60%',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0 auto'
    }
}));

export default function RecipeCard(props) {
    console.log('recipecard', props)
    const { recipe } = props;
    const classes = useStyles();

    const chooseIcon = (season) => {
        switch (season) {
            case 'Winter':
                return (<IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faSnowflake} />{season}</Button></IconButton>);
            case 'Spring':
                return (<IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faSeedling} />{season}</Button></IconButton>);
            case 'Summer':
                return (<IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faSun} />{season}</Button></IconButton>);
            case 'Autumn':
                return (<IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faCanadianMapleLeaf} />{season}</Button></IconButton>);
            default:
                return '';
        }
    }
    const theme = createMuiTheme({
        palette: {
            primary: teal
        },
    });
    const chooseReqs = (req) => {
        switch (req) {
            case 1:
                return (<IconButton disabled><Button color="primary" variant="outlined">VEGETARIAN</Button></IconButton>);
            case 2:
                return (<IconButton disabled><Button color="primary" variant="outlined">VEGAN</Button></IconButton>);
            case 3:
                return (<IconButton disabled><Button color="primary" variant="outlined">GLUTEN-FREE</Button></IconButton>);
            case 4:
                return '';
            default:
                return '';
        }
    }
    return (
        <Card className={`recipeCard ${classes.card}`}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={recipe.picture}
                    title={recipe.name}
                />
            </CardActionArea>
            <div className={classes.recipeDescription}>
                <CardContent>
                    <Typography className={classes.recipeTitle} variant="h5" component="h1">
                        {capitalizeWords(recipe.name)}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions} disableSpacing>
                    {chooseIcon(recipe.seasonName)}
                    <ThemeProvider theme={theme}>
                        {chooseReqs(recipe.dietaryId)}
                    </ThemeProvider>
                </CardActions>
            </div>
        </Card>
    );
}