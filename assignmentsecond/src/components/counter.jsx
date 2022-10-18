import React from 'react'
import './styles.css'
import { useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
    const incrementOperation = () => {
        setCounter(counter + 1)
        console.log(`counter = ${counter}`)
      }
    
      const decrementOperation = () => {
        setCounter(counter - 1)
        console.log(`counter = ${counter}`)
      }
    
  return (


    <div className='counter_container'>
        <div className='title_name'>
        <span >Counter</span>
        </div>
  <div className='all_contain'>
    
  
<button className='btn btn-danger' onClick={decrementOperation}>-</button>
      
      <h4>{counter}</h4>

    <button className='btn btn-success' onClick={incrementOperation}>+</button>
    </div>
    </div>
  )
}

export default Counter