import React from 'react'
import { useState } from 'react'
import "./styles.css"

const Registration = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  const [address,setAddress]=useState()
  const [password,setPassword]=useState();

  const userDetail=()=>{
    console.log(`User Name=${name}`);
    console.log(`User email=${email}`);
    console.log(`User address=${address}`);
    console.log(`User Phone number=${phone}`);
    console.log(`User password=${password}`);
  }


  return (
    <div className='container'>
    <h3>Register Here</h3>
   <div className='form_container'>
    

        <div className='inputField mb-3'>
    <label  htmlFor="name" className='heading'>Full Name</label>
   <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter your full name'/>
   </div>

   <div className='inputField mb-3'>
   <label htmlFor="email" className='heading'>Email</label>
   <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your email'/>
   </div>

   <div className='inputField mb-3'>
   <label htmlFor="phone" className='heading'>Phone</label>
   <input onChange={(e)=>setPhone(e.target.value)} type="number" placeholder='Phone Number'/>
  </div>

   <div className='inputField mb-3'>
   <label htmlFor="address" className='heading'>Address</label>
   <input onChange={(e)=>setAddress(e.target.value)} type="text" placeholder='Enter Address'/>
  </div>

   <div className='inputField mb-3'>
   <label htmlFor="password" className='heading'>Password</label>
   <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Create Password' />
  </div>

  
  </div>
 
   <button  onClick={userDetail} className='buttonLogin btn btn-success' type="submit">Sign in</button>
  </div>
  )
}

export default Registration