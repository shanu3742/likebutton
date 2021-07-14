import React from 'react';
import Fab from "@material-ui/core/Fab";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Tooltip from '@material-ui/core/Tooltip';



function Comment({onClick}) {
    

    
    
    
   
   
 
  return (
    < >
   <Tooltip title="Comments" placement="top">

   
    <Fab    variant="extended" onClick={onClick} >
     <ChatBubbleOutlineIcon />
      </Fab>
      
      </Tooltip>
     
    
    

   
    </>
  );
}

export default Comment;
