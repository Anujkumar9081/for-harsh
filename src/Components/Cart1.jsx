import React, { useState } from 'react'

const Cart1 = () => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  const handleClick = () => {
    alert("Button clicked")
    setInputValue("") 
  }

  return (
    <div>
      <h2>Input box</h2>

      <input 
        type="text" placeholder="Enter your item" value={inputValue} onChange={handleChange}
      />

      <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default Cart1