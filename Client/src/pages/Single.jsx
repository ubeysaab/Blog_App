import Edit from "../imgs/edit.png"
import Delete from "../imgs/delete.png"
import { Link } from "react-router-dom"
import MenuPost from "../components/MenuPost"
import data from "../data"




export default function Single(params) {

  let menuPosts =data.map((ele,i)=>{
    return (
      <MenuPost {...ele} key={i}/>
    )
  })
  return (
   <div className="single">
    <div className="content">
      <img src="https://source.unsplash.com/user/c_v_r/300x300" alt="" />
      <div className="user">
        <img  className="profile" src="https://source.unsplash.com/user/c_v_r/100x100" alt="" />
        <div className="info">
          <b>ubey</b>
          <p>posted 2 days ago</p>
          
        </div>
        <Link to={"/write/?edit=2"}>
          {/*  this will take us to edit page  */}
        <img  className="functional"src={Edit} alt="" />
        </Link>
        <img  className="functional"src={Delete} alt="" />
      </div>
      <h1>Title</h1>
      < p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, culpa nisi! Nisi modi ea accusamus non nesciunt, dolorem nobis maiores cum? Accusantium suscipit id temporibus ipsum modi molestiae nulla expedita.lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero repellendus ab maxime quia expeconsectetur adipisicing elit. Quibusdam libero repellendus ab maxime quia expedita vitae laborum voluptatibus nulla, est quisquam voluptate iste atque sit veniam earum necessitatibus temporibus ipsam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse odit alias, numquam aperiam molestiae quibusdam sunt nulla obcaecati necessitatibus. Accusamus quos et nihil nam quisquam possimus, est molestias recusandae?
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, culpa nisi! Nisi modi ea accusamus non nesciunt, dolorem nobis maiores cum? sicing elit. Illo esse odit uos et nihil nam quisquam possimus, est molestias recusandae?</p>
      <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quaerat autem dolor ea cum nulla odit vel neque consequatur alias, quasi quia fugit excepturi aut aspernatur repellendus. Possimus, quisquam ea?</p>
    </div>
    <div className="menu">
      {menuPosts}
    </div>
    
   </div>
  )
};
