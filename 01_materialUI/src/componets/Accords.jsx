import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from '@mui/material'
import React from 'react'

const Accords = () => {

    const courses = ["react", "mern", "java", "python", "Node", "AI"]

    return (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={">"}>
                    <Typography variant='h6'>
                        What isMern Stack
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro deserunt magnam.
                </AccordionDetails>
            </Accordion>
            <Accordion>/
                <AccordionSummary expandIcon={">"}>
                    <Typography variant='h6'>
                        What isMern Stack
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro deserunt magnam.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={">"}>
                    <Typography variant='h6'>
                        What isMern Stack
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro deserunt magnam.
                </AccordionDetails>
            </Accordion>


            {/* <Auto Complete */}
            <Autocomplete 
            multiple
            sx={{ width: 200,marginTop:20 }}
                renderInput={(params) => <TextField {...params} label="Courses" />}
                options={courses} />
        </div>
    )
}

export default Accords