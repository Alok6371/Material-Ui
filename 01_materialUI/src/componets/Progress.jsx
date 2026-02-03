import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { Box, LinearProgress } from '@mui/material';

const Progress = () => {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        // console.log(timer);

        return () => {
            clearInterval(timer);
        };
    }, []);
    // if (progress === 100) {
    //     alert("Succes")
    // }

    return (
        <Stack spacing={2} direction="row">
            <CircularProgress variant="determinate" value={25} />
            <CircularProgress variant="determinate" value={50} />
            <CircularProgress variant="determinate" value={75} />
            <CircularProgress variant="determinate" value={100} />
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress} enableTrackSlot size={150} />

            <Box sx={{ width: "100%" }}>
                <LinearProgress />
                <br />
                <LinearProgress variant='buffer' value={progress} valueBuffer={progress} />
            </Box>

        </Stack>
    );
}


export default Progress