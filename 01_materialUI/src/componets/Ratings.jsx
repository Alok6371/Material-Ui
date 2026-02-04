import { IconButton, Rating } from '@mui/material'
import React from 'react'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
const Ratings = () => {
    return (
        <div>
            <Rating />
            <br />
            <Rating defaultValue={2.5} precision={0.5} />
            <br />
            <Rating defaultValue={2.5} precision={0.5} readOnly /> readOnly

            <br />
            <IconButton onClick={() => alert("Icon Clicked")}>
                <AccessTimeRoundedIcon color='success' sx={{fontSize:"100px"}} />
            </IconButton>
            <br />
        </div>
    )
}

export default Ratings