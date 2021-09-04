import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, createTheme, Button, IconButton } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import { Assignment, Filter2, Filter3, Filter5 } from "@material-ui/icons";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

function Nav() {
  const [mob, setMob] = useState(false)
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#651fff",
        dark: "#000000",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#000000",
        dark: "#ba000d",
        contrastText: "#000",
      },
      dark: {
        light: "#ff7961",
        main: "#000000",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
  <MobileView>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <AppBar position="static" className="nav" position="sticky">
          <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <IconButton
               style={{ margin: 3 }}
                  color='inherit'
                  component={Link}
                  to={"/"}
             
                >
             <Assignment />
                </IconButton>
                <IconButton
               style={{ margin: 3 }}
                  color='inherit'
                  component={Link}
                  to={"/divby2"}
             
                >
         <Filter2 />
                </IconButton>
                <IconButton
               style={{ margin: 3 }}
                  color='inherit'
                  component={Link}
                  to={"/divby3"}
             
                >
         <Filter3 />
                </IconButton>
                <IconButton
               style={{ margin: 3 }}
                  color='inherit'
                  component={Link}
                  to={"/divby5"}
             
                >
         <Filter5 />
                </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>
      </MobileView>
<BrowserView>

<Slide direction="down" in={true} mountOnEnter unmountOnExit>
<AppBar position="static" className="nav" position="sticky">
  <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
    <Button
      style={{ margin: 5 }}
      color="inherit"
      size="small"
      variant="outlined"
      component={Link}
      to={"/"}
      startIcon={<Assignment />}
    >
      ALL
    </Button>
    <Button
      style={{ margin: 5 }}
      color="inherit"
      size="small"
      variant="outlined"
      component={Link}
      to={"/divby2"}
      startIcon={<Filter2 />}
    >
      Divisible By 2
    </Button>
    <Button
      style={{ margin: 5 }}
      color="inherit"
      size="small"
      variant="outlined"
      component={Link}
      to={"/divby3"}
      startIcon={<Filter3 />}
    >
      Divisible By 3
    </Button>
    <Button
      style={{ margin: 5 }}
      color="inherit"
      size="small"
      variant="outlined"
      component={Link}
      to={"/divby5"}
      startIcon={<Filter5 />}
    >
      Divisible By 5
    </Button>
  </Toolbar>
</AppBar>
</Slide>
</BrowserView>
    </ThemeProvider>
  );
}

export default Nav;
