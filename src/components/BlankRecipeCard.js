import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardActionArea, Button } from '@material-ui/core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 365,
        width: 365,
        display: 'inline-block',
        marginRight: '4.5rem',
        boxShadow: '0px 0px 4px rgba(0,0,0,.5)',
        transition: 'all .3s linear',
        backgroundColor: '#f9f9f9',
        // filter: 'blur(.2re   m)',
        // color: '#adadad',
        opacity: .3,
        '& :after': {
            backgroundColor: 'black',
            position: 'absolute'
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
    center: {
        textAlign: 'center',
        margin: '0 auto'
    },
    cardActions: {
        justifyContent: 'center'
    }
}));
const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#adadad'
      }
    },
  });
export default function RecipeCard(props) {
    const classes = useStyles();

    
    
    return (
        <Card className={`recipeCard ${classes.card}`}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="http://www.ashbournegolfclub.ie/wp-content/uploads/2014/10/light-grey-square.gif"
                    title='A Recipe'
                />
            </CardActionArea>
            <CardContent className={classes.center}>
                <Typography variant="h5" component="h1">
                    This is a Recipe
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
            <IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faSnowflake} />SEASON</Button></IconButton>
                {/* {chooseIcon(recipe.season)} */}
                <ThemeProvider theme={theme}>
                <IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faSnowflake} />SPECIAL DIET</Button></IconButton>
                {/* {chooseReqs(recipe.special)} */}
                </ThemeProvider>
            </CardActions>

        </Card>
    );
}