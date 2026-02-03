import { Box, Button, Link, Modal, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Models = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button onClick={() => setOpen(true)}>
                Open Model
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box>
                    <Typography>
                        This is Model
                    </Typography>
                    <Button variant='contained' onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </Box>
            </Modal>
            <Link variant='h4' color='secondary' href="https://www.google.com"
                underline='hover'>
                Nav Link
            </Link>
        </div>
    )
}

export default Models