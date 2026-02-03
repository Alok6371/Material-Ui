import React, { useState } from "react";
import { Typography, Button, TextField, AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import Form from "./componets/Form";
import Cards from "./componets/Cards";
import Models from "./componets/Models";
import Containers from "./componets/Containers";
import ListComponets from "./componets/ListComponets";
import Accords from "./componets/Accords";
import DrawerMenu from "./componets/DrawerMenu";

const App = () => {

  const [value, setValue] = useState(0)

  return (
    <div>
      <div>
        {/* <Typography variant="h2" sx={{ color: "red" }}>
        Technology
      </Typography> */}
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
        {/* <br />
      <br />
      <Form /> */}
      </div>
      <AppBar >
        <Toolbar>
          <Typography variant="h4">
            LOGO
          </Typography>

          <Tabs sx={{ marginLeft: "auto" }} textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>

          <Button variant="contained" color="success" sx={{ marginLeft: "auto" }}>
            SignIn
          </Button>
        </Toolbar>
      </AppBar>

      <div style={{ margin: "20vh" }}>
        {/* <Cards /> */}
        {/* <Models /> */}
        {/* <Containers /> */}
        {/* <ListComponets /> */}
        <Accords />
        <DrawerMenu/>
      </div>
    </div>
  );
};

export default App;
