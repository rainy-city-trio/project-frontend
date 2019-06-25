import React from 'react'
import { Typography, Button } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    button: {
        color: '#fff',
        marginRight: '.5rem',
        marginLeft: '.5rem'
    },
    input: {
        display: 'none',
    },
}));

const MenuItem = (props) => {
    const classes = useStyles();
    return (
        <Typography variant="title" color="inherit">
            <Button color="white" className={classes.button}>
                {props.item}
            </Button>
        </Typography>
    )
}

export default MenuItem;


