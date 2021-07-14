import React from 'react';
import Post from './comp/Post.js';



function App() {
  const comments=[
    {
      'id':'0',
      'name':'shanu',
      'comments':'Osm bro'
    },
     {
       'id':'1',
      'name':'bhanu',
      'comments':'Tnx bro'
    },
     {
       'id':'2',
      'name':'Cherry',
      'comments':'🤷‍♂️'
    }

  ]
  const Likes = [
    {
      'id':'0',
      'likes':'4'
    }
  ]
  const profile= [
    {
      'id':'0',
      'name':'shanu',
      'image':'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZ2FsJTIwdGlnZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' 
    },
    {
      'id':'1',
      'name':'Bhanu',
      'image':'https://i.pinimg.com/originals/c0/d6/25/c0d625a7ef5bc800380b76186f4f1e06.jpg' 
    }
  ]
 
  return (
   <>
    <Post comments={comments} Likes={Likes} profile={profile} />
    
    </>
    
    
    
    
  
   
    
  );
}

export default App;
