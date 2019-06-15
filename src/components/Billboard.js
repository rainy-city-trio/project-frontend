import React from 'react'
import { makeStyles, rgbToHex } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import billboard from './../img/cropped2.png'

const useStyles = makeStyles(theme => ({
  containerBillboard: {
    position: 'relative',
    zIndex: -9999,
    // backgroundColor: 'red',
    // boxShadow: 'inset 10px 10px 10px 10px black'
},
  billBoard: {
    zIndex: -9999999999
  },
  overlay: {
    // backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 1,
    boxShadow: 'inset -300px -50px 80px 0px rgba(255,255,255,1)'
  }
}));

const Billboard = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.containerBillboard}>
        <img src={billboard} width="100%" height="100%" className={classes.billBoard} alt="" />
        <div className={classes.overlay}></div>
      </div>
    </div>
  )


}
export default Billboard;