import React, { useState } from 'react'

function LoginPage() {
  const[UserName,setUserName]=useState('');
  const[Password,setPassword]=useState('');
  const formHandler=(event)=>
  {
    event.preventDefault();
    const  loginObj={
        name:UserName,pwd:Password
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
  }
  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={UserName} placeholder="Username" onChange={e=>setUserName(e.target.value)}/><br></br>
    Password : <input type="password" value={Password} placeholder="password" onChange={e=>setPassword(e.target.value)}/><br></br>
    <button type="submit">Login</button>
    </form></div>
  )
}

export default LoginPage