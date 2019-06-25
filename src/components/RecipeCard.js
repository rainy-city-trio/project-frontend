import React from 'react';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardActionArea, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Paper, Grid } from '@material-ui/core';
import { capitalizeWords } from './../helpers'
import { faSnowflake, faSeedling, faSun } from '@fortawesome/free-solid-svg-icons'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'
import { calcPercentage, ingredientsMatched, renderMatches } from './../helpers'

const useStyles = makeStyles(theme => ({
    matches: {
        fontSize: '.9rem',
        textAlign: 'center',
        width: '80%'
    },
    transition: {
        transition: 'all .3s linear'
    },
    card: {
        maxWidth: '20vw',
        width: '20vw',
        display: 'inline-block',
        marginRight: '4.5vw',
        boxShadow: '0px 0px 4px rgba(0,0,0,.7)',
        transition: 'all .3s linear',
        '&:hover': {
            transition: 'all .3s linear',
            boxShadow: '0px 0px 10px rgba(0,0,0,.3)'
        },
        [theme.breakpoints.down('md')]: {
            marginRight: '3vw',
            maxWidth: '21.5vw',
            width: '21.5vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70.5vw',
            maxWidth: '70.5vw',
            marginBottom: '1rem'
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
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    center: {
        textAlign: 'center'
    },
    recipeDescription: {
        display: 'flex',
        flexDirection: 'column',
        height: '230px',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2.5rem 0rem',
        [theme.breakpoints.down('md')]: {
            height: '40vh'
        },
        [theme.breakpoints.down('sm')]: {
            height: '20vh'
        }
        // alignItems: 'flex-end',
        
    },
    recipeTitle: {
        width: '70%',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0 auto',
        padding: '.3rem 0',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.3rem'
        }
    },
    percentage: {
        // width: '100px',
        // height: '100px',
        position: 'absolute',
        padding: '.3rem .3rem 0 0',
        // backgroundColor: 'red',
        top: 0,
        right: 0
    },
    matchedIngredients: {
        fontWeight: 'bold'
    },

    
    cover: {

    },
    buttonCard: {

        [theme.breakpoints.down('md')]: {
            // padding: '.3rem'
        }
    }
}));

export default function RecipeCard(props) {
    // console.log('recipecard', props)
    const { recipe, newSearch } = props;
    const classes = useStyles();

    const matched = ingredientsMatched(newSearch.ingredients, recipe.ingredients);
    // console.log('matched', matched)
    const chooseIcon = (season) => {
        switch (season) {
            case 'Winter':
                return (<IconButton disabled><Button variant="outlined" className={classes.buttonCard}><FontAwesomeIcon className={classes.icon} icon={faSnowflake} />{season}</Button></IconButton>);
            case 'Spring':
                return (<IconButton disabled><Button variant="outlined" className={classes.buttonCard}><FontAwesomeIcon className={classes.icon} icon={faSeedling} />{season}</Button></IconButton>);
            case 'Summer':
                return (<IconButton disabled><Button variant="outlined" className={classes.buttonCard}><FontAwesomeIcon className={classes.icon} icon={faSun} />{season}</Button></IconButton>);
            case 'Autumn':
                return (<IconButton disabled><Button variant="outlined" className={classes.buttonCard}><FontAwesomeIcon className={classes.icon} icon={faCanadianMapleLeaf} />{season}</Button></IconButton>);
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
                return (<IconButton disabled><Button color="primary" variant="outlined" className={classes.buttonCard}>VEGETARIAN</Button></IconButton>);
            case 2:
                return (<IconButton disabled><Button color="primary" variant="outlined" className={classes.buttonCard}>VEGAN</Button></IconButton>);
            case 3:
                return (<IconButton disabled><Button color="primary" variant="outlined" className={classes.buttonCard}>GLUTEN-FREE</Button></IconButton>);
            case 4:
                return '';
            default:
                return '';
        }
    }

    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    const dialogStyles = {
        dialog: {

            // backgroundImage: `url(${recipe.picture})`,
            // backgroundSize: 'cover',
        },
        root: {
            flexGrow: 1,
            display: 'flex'
            // backgroundColor: 'red'
        },
        paper: {
            padding: '1rem',
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        paperImg: {
            padding: '1rem',
            backgroundImage: `url(${recipe.picture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '30vh'
        },
        ingredientList: {
            listStyleType: 'none'
        }
    };

    const DialogWithStyles = withStyles(dialogStyles)(({ classes }) => (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
            classes={{ paper: classes.dialog }}
        >
            <DialogTitle id="alert-dialog-title">{recipe.name}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className={classes.root}>
                        <Grid   container 
                                alignItems="center"
                                justify="center"
                                spacing={3}>
                            <Grid item xs={6}>
                                <Paper className={classes.paperImg}></Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}> <h3>Ingredients:</h3>
                    <ul className={classes.ingredientList}>
                        {recipe.ingredients.map(ing => {
                            return (<li>{ing.qty} {ing.ingredient}</li>)
                        })}
                    </ul></Paper>
                            </Grid>
                        </Grid>
                    </div>

                    
                   
                    <h3>Method:</h3>
                    <ol>
                        {recipe.method.split(". ").map(elem => {
                            return (<li>{elem}</li>)
                        })}
                    </ol>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
          </Button>
            </DialogActions>
        </Dialog>
    ));
    return (
        <div className={`recipeCard ${classes.transition}`}>
            <Card className={`${classes.card}`} onClick={handleClickOpen}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={recipe.picture}
                        title={recipe.name}
                    />
                    <div className={classes.percentage}>
                        <Button size="small" variant="contained" color="primary">{calcPercentage(recipe.ingredientMatch, newSearch.ingredients.length)}% Match</Button>

                    </div>
                </CardActionArea>
                <div className={classes.recipeDescription}>
                    <CardContent>
                        <Typography className={classes.recipeTitle} variant="h5" component="h1">
                            {capitalizeWords(recipe.name)}
                        </Typography>
                    </CardContent>
                    <Typography variant="subtitle1" className={classes.matches}>
                        This recipe includes
                    <span className={classes.matchedIngredients}>
                            {renderMatches(matched)}
                        </span>

                    </Typography>
                    <CardActions className={classes.cardActions} disableSpacing>

                        {chooseIcon(recipe.seasonName)}
                        <ThemeProvider theme={theme}>
                            {chooseReqs(recipe.dietaryId)}
                        </ThemeProvider>
                    </CardActions>
                </div>
            </Card>
            <DialogWithStyles />
        </div>

    );
}