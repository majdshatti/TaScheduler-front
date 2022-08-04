import { useState } from "react";
// Material UI
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// Components
import { NavLogo } from "../Logo";

const NavBar = () => {
  // const [loggedIsLogged, setIsLogged] = useState<boolean>(false);

  return (
    <AppBar color="default">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <NavLogo />
          <Button
            variant="contained"
            startIcon={<AccountCircleIcon />}
            sx={{ backgroundColor: "#009688" }}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
