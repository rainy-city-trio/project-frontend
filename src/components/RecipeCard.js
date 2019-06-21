import React from 'react';
// import clsx from 'clsx';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, teal } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// faSnowflake: winter, faSun: summer, faSeedling: spring, faCanadianMapleLeaf: autumn
// faLeaf: vegan
// import { faLeaf, faCarrot } from '@fortawesome/free-solid-svg-icons'
// import glutenfree from './../img/glutenfree.svg'
// import vegan from './../img/vegan.svg'
// import gluten from './../img/gluten2.svg'
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
        paddingTop: '56.25%', // 16:9
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
        // width: '50%',
        // heigth: '50%'
    }
}));

export default function RecipeCard(props) {
    console.log('recipecard', props)
    const { recipe } = props;
    const classes = useStyles();

    const chooseIcon = (season) => {
        switch (season) {
            case 'winter':
                return (<IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faSnowflake} />{season}</Button></IconButton>);
            case 'spring':
                return (<IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faSeedling} />{season}</Button></IconButton>);
            case 'summer':
                return (<IconButton disabled><Button variant="outlined"><FontAwesomeIcon className={classes.icon} icon={faSun} />{season}</Button></IconButton>);
            case 'autumn':
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
            case 'vegan':
                return (<IconButton disabled><Button color="primary" variant="outlined">{req}</Button></IconButton>);
            case 'vegetarian':
                return (<IconButton disabled><Button color="primary" variant="outlined">{req}</Button></IconButton>);
            case 'gluten-free':
                return (<IconButton disabled><Button color="primary" variant="outlined">{req}</Button></IconButton>);
            default:
                return '';
        }
    }
    

    return (
        <Card className={`recipeCard ${classes.card}`}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={recipe.image}
                    title={recipe.title}
                />
            </CardActionArea>


            <CardContent>
                <Typography variant="h5" component="h1">
                    {capitalizeWords(recipe.title)}
                    
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                    {recipe.description}
        </Typography> */}
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                </IconButton> */}
                {/* <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton> */}
                {chooseIcon(recipe.season)}
                <ThemeProvider theme={theme}>
                {chooseReqs(recipe.special)}
                </ThemeProvider>
            </CardActions>

        </Card>
    );
}