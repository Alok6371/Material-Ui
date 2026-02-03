import React from 'react'
import { useState } from 'react'
import {
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormControl
} from '@mui/material'


const Form = () => {

    const [input, setInput] = useState({
        name: "Alok",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setInput(prevState => ({
            ...prevState, [
                e.target.name
            ]: [e.target.value]
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(input)
    }

    return (
        <>
            <form action=""
                onSubmit={handleSubmit}
            >
                <TextField name='name' type='text' variant='outlined'
                    placeholder='Enter the name'
                    value={input.name}
                    onChange={handleChange}
                    sx={{
                        margin: "20px"
                    }} />
                <TextField name='email' type='email' variant='outlined'
                    placeholder='Enter the Email'
                    value={input.email}
                    onChange={handleChange}

                    sx={{
                        margin: "20px"
                    }} />
                <TextField name='password' type='password' variant='outlined'
                    placeholder='Enter the Password'
                    onChange={handleChange}

                    sx={{
                        margin: "20px"
                    }} />
                <br />
                <br />
                <FormControl >
                        
                </FormControl>
                <Button type='submit'>Submit</Button>
            </form>
        </>
    )
}

export default Form