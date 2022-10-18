import React,{useState} from 'react'
import './styles.css'


const LoginForm = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const userDetail =()=>{
    console.log(`Email =${email}`)
    console.log(`Password=${password}`)
  }
  

  return (
    <div className='container'>
      <h3>Login Here</h3>
      <div className='colomn'>
      <label htmlFor="email">Email</label>
     <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Type your email'/>

  <label htmlFor="password">Password</label>
     <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' />

    
     </div>
     <button  onClick={userDetail} className='buttonLogin btn btn-success' type="submit">Login</button>
    </div>
  )
}

export default LoginForm