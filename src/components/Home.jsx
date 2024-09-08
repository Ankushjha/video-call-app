import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [input, setInput] = useState("")

    const navigate = useNavigate();
    
    const handleSubmit = () => {
        console.log(input)

        navigate(`/room/${input}`)
    }
  return (
    <div>
        <input 
        type="text"
         name="name" 
         placeholder='Enter Your Name...'
         value={input}
         onChange={e => setInput(e.target.value)}
         />
        <input type="submit" value="Join" onClick={handleSubmit}/>
    </div>
  )
}

export default Home