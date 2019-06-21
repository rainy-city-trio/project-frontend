import React from 'react'
import { makeStyles, Grid, Button, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faAws, faJs, faGithub, faCss3} from '@fortawesome/free-brands-svg-icons/'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#B0BEC5'
    },
    wrapper: {
        width: '60%',
        margin: '0 auto',
        padding: '3rem'
    },
    footerHeading: {
        fontFamily: theme.headings.fontFamily,
        fontSize: '2rem',
        // color: 'white',
        textAlign: 'center'
    },
    footerText: {
        width: '70%'
    },
    icon: {
        margin: '.4rem'
    },
    Button: {
        marginRight: '.5rem',
        marginBottom: '.5rem'
    }
}));

export default function Footer() {
    const techIcons = [
        {tech: 'JavaScript', icon: faJs},
        {tech:'React', icon: faReact},
        {tech: 'CSS3', icon: faCss3},
        {tech: 'Node.js', icon: faNodeJs},
        {tech: 'AWS', icon: faAws},
        {tech: 'GitHub', icon: faGithub}
    ];
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <div className={classes.wrapper}>
                <Grid container

                    direction="row"
                    justify="center"
                    alignItems="center" spacing={3}>
                    <Grid item xs={6}>
                        <p>
                            <span className={classes.footerHeading}>
                                zest
                        </span>
                            <div className="tagline">
                                recipe manager app for modern times
                        </div>
                        </p>
                    </Grid>
                    <Grid item xs={6}>

                        <div className={classes.footerText}>
                            {
                                techIcons.map(elem => {
                                    return (<Button variant="outlined" className={classes.Button}>
                                                <FontAwesomeIcon icon={elem.icon} className={classes.icon}/>
                                                    {elem.tech}
                                            </Button>)
                                })
                            }
                        </div>
                    </Grid>

                </Grid>


            </div>
        </div>
    )
}
