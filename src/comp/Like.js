import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Like() {
  const [like , isLike] = useState(null)
  const [dlike , isDlike] = useState(null)

  //for popover

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [emoji, getemoji] = useState(null)

  const [sademoji, getSademoji] = useState(null)
  
  const classes = useStyles();

  const checklike = (event) =>  {
    getSademoji(false)
    isLike(true)
    isDlike(false)
    setAnchorEl(event.currentTarget);
  }
  const checkdislike = (event)  => {
    getemoji(false)
isLike(false)
isDlike(true)
setAnchorEl1(event.currentTarget);
  }
// for popover
  const handleClose = () => {
    setAnchorEl(null);
  };
   const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const open = Boolean(anchorEl);
   const open1 = Boolean(anchorEl1);

   const onlikeone =() => {
     getemoji('👍')
   }
   const onliketwo =() => {
     getemoji('😍')
   }
   const onlikethree =() => {
     getemoji('😊')
   }
   const onlikefour =() => {
     getemoji('😘')
   }
  const onsadclickone = () => {
    getSademoji('😡')
  }
  const onsadclicktwo = () => {
    getSademoji('😥')
  }
  const onsadclickthree= () => {
    getSademoji('🤫')
  }
   const onsadclickfour= () => {
    getSademoji('👎')
  }
  
  return (
    <>

    <Tooltip title="Like" placement="top">
    <Fab onClick={checklike} style={{color:like?'green':like===null?null:'red'}} variant="extended" className={classes.extendedIcon}>
      {emoji?emoji:<FavoriteIcon />}  
      </Fab>
      
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
      <div><span onClick={onlikeone}>👍</span>|<span onClick={onliketwo}>😍</span>|<span onClick={onlikethree}>😊</span>|<span onClick={onlikefour}>😘</span></div>
      </Popover>
      
      
      <Tooltip title="Dislike" placement="top">
      <Fab variant="extended"  onClick={checkdislike} style={{color:dlike?'green':dlike===null?null:'red'}} className={classes.extendedIcon}>
       {sademoji?sademoji: <ThumbDownIcon />}
      </Fab>
      </Tooltip>
      
      <Popover
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
      <div><span onClick={onsadclickone}>😡</span>|<span onClick={onsadclicktwo} >😥</span>|<span onClick={onsadclickthree}>🤫</span>|<span onClick={onsadclickfour}>👎</span></div>
      </Popover>
      
    </>
  );
}

export default Like;
