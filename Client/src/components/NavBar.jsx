import logo from "../imgs/logo.png"

import { Link } from "react-router-dom"
export default function NavBar(params) {

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo"><img src={logo} alt="" className="logo" /></div>
        <div className="links"> 
        <Link className="link" to={"/?cat=backend"}>BackEnd</Link>
        <Link className="link" to={"/?cat=frontEnd"}>frontEnd</Link>
        <Link className="link" to={"/?cat=AI"}>AI</Link>
        
        <span>ubey</span>
        <span>Logout</span>
        <Link to={"/write"} className="link write"> Write</Link>
         </div>
      </div>
    </div>
  )
};
