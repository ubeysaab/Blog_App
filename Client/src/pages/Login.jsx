import { Link } from "react-router-dom"

export default function login(params) {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="userName" />
        <input type="password" placeholder="password"/>
        <button> login </button>
        
       <p>Don't have an accout so go to <Link to={'/register'}>Register</Link></p>
      </form>
    </div>
  )
};
