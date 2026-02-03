import React, { useState } from 'react'
import { Button, Snackbar, Box, CircularProgress } from '@mui/material'

const Snackbars = () => {
    const [open, setOpen] = useState(false)
    const [position, setPosition] = useState({
        vertical: 'top',
        horizontal: 'center'
    })

    const openSnackbar = (vertical, horizontal) => {
        setPosition({ vertical, horizontal })
        setOpen(true)
    }

    const closeSnackbar = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ width: 400, textAlign: 'center' }}>
            <h3>Snackbar Positions</h3>

            <Button onClick={() => openSnackbar('top', 'left')}>
                Top Left
            </Button>

            <Button onClick={() => openSnackbar('top', 'center')}>
                Top Center
            </Button>

            <Button onClick={() => openSnackbar('top', 'right')}>
                Top Right
            </Button>

            <br /><br />

            <Button onClick={() => openSnackbar('bottom', 'left')}>
                Bottom Left
            </Button>

            <Button onClick={() => openSnackbar('bottom', 'center')}>
                Bottom Center
            </Button>

            <Button onClick={() => openSnackbar('bottom', 'right')}>
                Bottom Right
            </Button>

            <Snackbar
                open={open}
                anchorOrigin={position}
                autoHideDuration={2000}
                onClose={closeSnackbar}
                message="I love snacks 😄"
                sx={{ background: "green" }}
            />
            <CircularProgress />
            <CircularProgress  color='success'
            variant='determinate' value={71}
            />
        </Box>
        
    )
}

export default Snackbars
