import React from "react";
import { Typography, Button, TextField } from "@mui/material";
import Form from "./componets/Form";

const App = () => {
  return (
    <div>
      <Typography variant="h2" sx={{ color: "red" }}>
        Technology
      </Typography>
      {/* <Button variant="contained" color="success" sx={{ margin: "30px" }}>
        Click me
      </Button>
      <Button variant="text" disabled>
        Click me
      </Button>
      <Button
        variant="outlined"
        onClick={() => alert("YOu Clicked")}
        href="#text-buttons"
      >
        Click me
      </Button> */}
      <br />
      <br />
      <Form />
    </div>
  );
};

export default App;
