
import Post from '../components/Post'
import {faker} from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'

import data from "../data.js"
export default function Home(params) {
  
  




  
  let posts = data.map((ele,i)=>{
    return(
      <Post  key={i} {...ele}/>
    )
  }
  )
  
  console.log(posts)
  return (
    <>
     <div className="posts">
       {/* <p>welcom Home</p> */}
        {posts}
     </div>
    </>
  )
};
