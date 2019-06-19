import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// faSnowflake: winter, faSun: summer, faSeedling: spring, faCanadianMapleLeaf: autumn
// faLeaf: vegan
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import glutenfree from './../img/glutenfree.svg'
import vegan from './../img/vegan.svg'
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
        // boxShadow: '0px 0px 3px rgba(0,0,0,.3)'
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
        marginRight: '.4rem'
    }
}));

export default function RecipeCard(props) {
    console.log('recipecard', props)
    const { recipe } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const chooseIcon = (season) => {
        switch (season) {
            case 'winter':
                return <FontAwesomeIcon className={classes.icon} icon={faSnowflake} />;
            case 'spring':
                return <FontAwesomeIcon className={classes.icon} icon={faSeedling} />;
            case 'summer':
                return <FontAwesomeIcon className={classes.icon} icon={faSun} />;
            case 'autumn':
                return <FontAwesomeIcon className={classes.icon} icon={faCanadianMapleLeaf} />;
            default:
                return '';
        }
    }

    return (
        <Card className={classes.card}>
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
                <IconButton disabled>
                    <Button  variant="outlined">
                        {chooseIcon(recipe.season)}
                        {recipe.season}
                    </Button>
                </IconButton>
                <IconButton>
                    <FontAwesomeIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
          </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
          </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}