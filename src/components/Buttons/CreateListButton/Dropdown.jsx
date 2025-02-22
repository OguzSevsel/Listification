import React from 'react'
import Button from '../Button'

function Dropdown({onClick, buttonText}) {

  return (
    <div>
        <Button onClick={onClick} buttonText={buttonText} isIcon={false} rounding={"10px"}/>
    </div>
  )
}

export default Dropdown
