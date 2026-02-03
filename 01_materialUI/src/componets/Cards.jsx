import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from "@mui/material";
import React from "react";

import { useState } from "react";

const Cards = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component={"img"}
                    height="140"
                    image="https://images.unsplash.com/photo-1768928969717-c39ca2cf6ed7?q=80&w=883&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Test image"
                />
                <CardContent>
                    <Typography gutterBottom veriant="h5" component="div">
                        Web Design
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                        quae perferendis inventore repellendus magnam consequatur optio
                        alias omnis fugiat deserunt!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary"
                        onClick={() => setOpen(true)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Are Yout Sure</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        are you sure to delete this Product?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setOpen(false)}
                    >cancel</Button>
                    <Button
                        onClick={() => { }}
                    >Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Cards;
