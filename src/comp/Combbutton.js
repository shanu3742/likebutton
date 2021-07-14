import React, {useState} from 'react';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Like from './Like.js'
import Comment from './comment.js'
import Share from './Share.js'
import '../Css/group.css'





function Combbutton({comments, Likes}) {
    const comm = comments
    const commentLength =  comm.length
   
    const likelength = Likes.length
    
   
    const [open, isopen] = useState(false)
    

    const getdata = () => {
        isopen((p) => !p)
    }
 
  return (
< div>
<div id= 'container' style={{marginBottom:'0px'}}>

{likelength===null?<p>0 Likes</p>:<p>{likelength}Likes</p>}
{commentLength ===null?<p>no comments</p>:<p>{commentLength}comments</p>}
</div>

 <Divider />
    <div id= 'container' >
           <div  >
             <Like />
            </div> 


        
            <div  >
             <Comment onClick={getdata}/>
            </div>
         
            <div >
             <Share />
            </div>
    </div>         
          
        
     


  <Divider />
 

{open?comm.map((el) => {
    return <div  key={el.id}> <Avatar >{el.name.charAt(0) }</Avatar> <div style={{background:'#949994' ,borderTopLeftRadius:'5px',borderTopRightRadius:'5px',borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px'}}> <h6 style={{display:'inline'}}>{el.name}</h6><p  style={{display:'inline', marginLeft:'2px' ,color:'#5a5c5a'}}>{el.comments}</p></div></div>
}):null}
    
    
  
   
    </div>
  );
}

export default Combbutton;
