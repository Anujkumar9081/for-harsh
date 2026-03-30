import React, { useState } from 'react'

const Cart1 = () => {
  const [inputValue, setInputValue] = useState("")
  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    alert("Button clicked")
    setInputValue("")
    setCount(0)
  }

  const handleCountChange = (e) => {
    setCount(Number(e.target.value)) 
  }

  return (
    <div>
      <h2>Input box</h2>

     
      <input 
        type="text"
        placeholder="Enter your item"
        value={inputValue}
        onChange={handleChange}
      />

      
      <input
        type="number"
        value={count}
        onChange={handleCountChange}
        min="0"
        style={{ marginLeft: "10px", width: "60px" }}
      />

      <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default Cart1