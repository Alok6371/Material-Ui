import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const ListComponets = () => {

    const courses = ["react", "Node", "Mern"]

    return (
        <div>
            <List sx={{ width: 250, background: "gray" }}>
                {courses.map((e) => (
                    <ListItem>
                        <ListItemButton>
                            {'>'}
                        </ListItemButton>
                        <ListItemText primary={e} />

                    </ListItem>
                ))}

            </List>
        </div>
    )
}

export default ListComponets