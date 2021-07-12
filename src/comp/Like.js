import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();

  const checklike = () =>  {
    isLike(true)
    isDlike(false)
  }
  const checkdislike = ()  => {
isLike(false)
isDlike(true)
  }
  return (
    < >
    <Tooltip title="Like" placement="top">
    <Fab onClick={checklike} style={{color:like?'green':like===null?null:'red'}} variant="extended" className={classes.extendedIcon}>
        <FavoriteIcon />
      </Fab>
      </Tooltip>
      <Tooltip title="Dislike" placement="top">
      <Fab variant="extended" style={{color:dlike?'green':dlike===null?null:'red'}} onClick={checkdislike} className={classes.extendedIcon}>
        <ThumbDownIcon />
      </Fab>
      </Tooltip>
    </>
  );
}

export default Like;
