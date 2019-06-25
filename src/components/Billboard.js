import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import billboard from './../img/cropped33.png'
import SearchWindow from './SearchWindow'

const useStyles = makeStyles(theme => ({
  containerBillboard: {
    position: 'relative',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
},
  billBoard: {
    zIndex: -9999999999,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '120%',
      marginLeft: '-8vw'
    },
  },
  overlay: {
    // backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 1,
    boxShadow: 'inset -90px -90px 80px 0px rgba(255,255,255,1)'
  }
}));

const Billboard = (props) => {
  // console.log('billboard props', props.state);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.containerBillboard}>
        <img src={billboard} className={classes.billBoard} alt="" />
        <div className={classes.overlay}></div>
        
      </div>
      <SearchWindow state={props.state} 
                    keyListener={props.keyListener} 
                    onClickPopular={props.onClickPopular} 
                    deleteIngredient={props.deleteIngredient} 
                    deleteReqs={props.deleteReqs}
                    deleteSeason={props.deleteSeason}
                    nextStep={props.nextStep}
                    prevStep={props.prevStep}
                    toggleSpecial={props.toggleSpecial}
                    toggleSeason={props.toggleSeason}
                    findRecipe={props.findRecipe}
                    />
    </div>
  )


}
export default Billboard;