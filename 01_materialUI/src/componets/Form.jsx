import React, { useState } from 'react'
import {
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Typography,
    RadioGroup,
    Radio
} from '@mui/material'

const Form = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        courses: "",
        terms: false,
        gender: "",
    })

    // Universal handler (text, select, checkbox)
    const handleChange = (e) => {
        const { name, value, type, checked, gender } = e.target
        setInput(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : [value]
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!input.terms) {
            alert("Please agree to the terms")
            return
        }

        console.log(input)
    }

    return (
        <Box sx={{ maxWidth: 400, margin: "50px auto" }}>
            <Typography variant="h4" align="center" mb={2}>
                Registration Form
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Course</InputLabel>
                    <Select
                        name="courses"
                        value={input.courses}
                        label="Course"
                        onChange={handleChange}
                    >
                        <MenuItem value="react">React</MenuItem>
                        <MenuItem value="node">Node</MenuItem>
                        <MenuItem value="express">Express</MenuItem>
                        <MenuItem value="mongodb">MongoDB</MenuItem>
                    </Select>
                </FormControl>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="terms"
                                checked={input.terms}
                                onChange={handleChange}
                            />
                        }
                        label="I agree to the Terms and Conditions"
                    />
                </FormGroup>
                <br />
                <FormControl fullWidth margin='normal'>
                    <RadioGroup name='gender' defaultValue={'male'} onChange={handleChange}>

                        <FormControlLabel value={'male'} label="male" control={<Radio />}>

                        </FormControlLabel>
                        <FormControlLabel value={'female'} label="female" control={<Radio />}>

                        </FormControlLabel>
                        <FormControlLabel value={'other'} label="other" control={<Radio />}>

                        </FormControlLabel>

                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default Form
