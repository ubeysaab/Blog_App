import { Link } from "react-router-dom"

export default function register(params) {
  return (
    <div className="auth">
      <h1>register</h1>
      <form action="">
        <input type="text" placeholder="userName" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password"/>
        <button> register </button>
        
       <p>Do have an accout so go to <Link to={'/login'}>Register</Link></p>
      </form>
    </div>
  )
};
