import { Container, Typography } from '@mui/material'
import React from 'react'

const Containers = () => {
    return (
        <div>
            <Container sx={{ background: 'yellow', marginTop: "10vh",padding:"2vh" }} maxWidth="xs">
                <Typography variant='body2'>
                    This is Xs
                </Typography>
            </Container>
            <Container sx={{ background: 'yellow', marginTop: "10vh",padding:"2vh" }} maxWidth="sm">
                <Typography variant='body2'>
                    This is Small
                </Typography>
            </Container>
            <Container sx={{ background: 'yellow', marginTop: "10vh",padding:"2vh" }} maxWidth="md">
                <Typography variant='body2'>
                    This is Medium
                </Typography>
            </Container>
            <Container sx={{ background: 'yellow', marginTop: "10vh",padding:"2vh" }} maxWidth="lg">
                <Typography variant='body2'>
                    This is  Large
                </Typography>
            </Container>
            <Container sx={{ background: 'yellow', marginTop: "10vh",padding:"2vh" }} maxWidth="xl">
                <Typography variant='body2'>
                    This is Extra Large
                </Typography>
            </Container>
        </div>
    )
}

export default Containers