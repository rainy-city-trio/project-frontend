import React from 'react'
import { makeStyles, rgbToHex } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import splash2 from './../img/billboard2.jpg'

const useStyles = makeStyles(theme => ({
  billBoard: {
      backgroundBlendMode: 'screen'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '86rem',
    top: '87px',
    left: '0px',
    color: 'black',
    backgroundColor: "#FBE9E7",
    opacity: '0.4'
 }
}));

const Billboard = () => {
    const classes = useStyles();
    return (
      <div>
        <img src={splash2} width="100%" height="100%" className={classes.billBoard} alt=""/>
        <div className={classes.overlay}></div>
      </div>
    )
  

}
export default Billboard;