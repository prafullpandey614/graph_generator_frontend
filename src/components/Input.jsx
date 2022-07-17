import React from 'react'
import "./input.css"
const Input = (props) => {
  return (
    <input type="text" placeholder={props.placeholder} className="input"/>
  )
}

export default Input