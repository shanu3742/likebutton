import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Combbutton from './Combbutton.js'
import Imagecomp from './Imagecomp.js'
import '../Css/group.css'




  


function Post({comments,Likes,profile}) {
  return (
<div>     
       
         {profile.map((el) => {
          return (
               <div> 
                    <Avatar id='div' >{el.name.charAt(0).toUpperCase()  }</Avatar>
                      <p id='p'  >{el.name.toUpperCase()} </p>
                      <img  id='img'  alt={el.name} src ={el.image} />
                      <Combbutton comments={comments} Likes={Likes} />
                </div> 
                     
          ) })}
        
       
         
        
        
       
        
      
       
        
    
 
        
       {/* <Combbutton comments={comments} Likes={Likes} />*/}

  
         

 
   
    
     
      
      </div> 
      
    
     
      
    );
  }
  
  export default Post;
  