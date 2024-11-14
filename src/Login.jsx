import React from 'react'

function Login() {
  return (
<div className="contain">
  <h1>Login</h1>
  <div className="inputs">
    <label>Username</label>
    <input type="text" placeholder="Username" className="input" /><br></br>
    <label>Password</label>
    <input type="password" placeholder="Password" className="input" />
    <button href="#" className="go">
      Go
    </button>
  </div>
</div>

  
  )
}

export default Login