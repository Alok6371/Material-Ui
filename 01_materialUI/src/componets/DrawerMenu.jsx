import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const DrawerMenu = () => {


    const [open, setOpen] = useState(false)
    const courses = ["react", "Mongo", "java", "AI"]

    return (
        <div>
            <Button variant='contained' onClick={() => setOpen(true)}>
                Open
            </Button>
            <Drawer open={open} onClose={() => setOpen(false)} sx={{ marginTop: 10 }}>
                <List >
                    {courses.map((course) => (
                        <ListItem
                            onClick={() => setOpen(false)}>

                            <ListItemText primary={course} sx={{ background: "lightgreen", padding: 2, borderRadius: 1 }} />
                        </ListItem>
                    ))}
                </List>
                <Button onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Drawer>
        </div>
    )
}

export default DrawerMenu