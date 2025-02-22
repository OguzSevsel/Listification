import React from "react";


const Button = ({onClick, isIcon, icon, buttonText, rounding, className}) => {

    return (
        <button className={className} style={{borderRadius: rounding}} onClick={onClick} >
            {isIcon ? <icon/> : buttonText}
        </button>
    )
    
}

export default Button;