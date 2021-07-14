import React from 'react';
import Fab from "@material-ui/core/Fab";
import Tooltip from '@material-ui/core/Tooltip';
import ShareIcon from '@material-ui/icons/Share';



function Share() {
 
  return (
    < >
   <Tooltip title="Share" placement="top">
    <Fab   variant="extended">
     <ShareIcon />
      </Fab>
      
      </Tooltip>
    
    
  
   
    </>
  );
}

export default Share;
