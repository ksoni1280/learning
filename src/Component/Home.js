import React, { useState } from 'react'

const Home = () => {

    const[data, setData] = useState({email:"", password:''})

    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name)
        console.log(name)
        setData((preValue)=>{
            return {
                ...preValue,
                [name]: value
            }
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
    
        
    }
      return (
    <div>
    <h1> This is home page</h1>
    <h2> Please fill the form below</h2>

   <div className='logform'>
   <form onClick={handleSubmit}>
        <label> Email id: </label> <input  type="text" name= 'email' value={data.email} onChange={handleChange} />
        <label> Password: </label> <input name= 'password' type="password" value={data.password} onChange={handleChange} />
        <button type='submit'> Log In </button>
    </form>
   </div>

    </div>
  )
}

export default Home