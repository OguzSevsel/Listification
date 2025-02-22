import React from 'react'
import Button from '../Button'
import AddIcon from '@mui/icons-material/Add';


function CreateListButton() {

    const showDropDown = () => {
        
    }
    
    return (

        <Button onClick={showDropDown} isIcon={true} icon={AddIcon} rounding={"10px"}/>

    )
}

export default CreateListButton
