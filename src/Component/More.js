import React, { useState } from 'react'
import './More.css'

const More = () => {
    const [isCheck, setCheck]= useState(false)
    
    const [isIndex, setIndex]= useState()
    const games= ['Cricket', 'Football', 'Rugby']
    const handleChange= (index)=>{
        setCheck(!isCheck)
        
        setIndex(index)
        }
        
  return (
    <div>
        {games.map((item, index)=>{
            return <div className='list'  key={index}>
            <input type="checkbox" onClick={()=> handleChange(index)}></input>  
            <li >{item}</li>
            {(isCheck && isIndex === index) ? <button className='delBtn'>Delete</button> : <button className='delBtn unactive'>Delete</button>}
           
            </div>
           

        })}
    </div>
  )
}

export default More