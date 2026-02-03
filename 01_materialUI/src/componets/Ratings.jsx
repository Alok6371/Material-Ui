import { Rating } from '@mui/material'
import React from 'react'

const Ratings = () => {
    return (
        <div>
            <Rating />
            <br />
            <Rating defaultValue={2.5} precision={0.5} />
            <br />
            <Rating defaultValue={2.5} precision={0.5} readOnly /> readOnly

        </div>
    )
}

export default Ratings