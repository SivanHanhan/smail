import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { LogInDialog } from "./LogInDialog";
import { useState } from "react";
import { SignUpDialog } from "./SignUpDialog";

export const TopBar = () => {
  const [openLogInDialog, setOpenLogInDialog] = useState(false);
  const [openSignUpDialog, setOpenSignUpDialog] = useState(false);

  const handleSignUpDialogOpen = () => {
    setOpenSignUpDialog(true);
  };

  const handleSignUpDialogClose = () => {
    setOpenSignUpDialog(false);
  };

  const handleLogInDialogOpen = () => {
    setOpenLogInDialog(true);
  };

  const handleLogInDialogClose = () => {
    setOpenLogInDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            my mail
          </Typography>
          <Button color="inherit" onClick={handleLogInDialogOpen}>
            Login
          </Button>
          <Button color="inherit" onClick={handleSignUpDialogOpen}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <LogInDialog
        openMailDialog={openLogInDialog}
        handleMailDialogClose={handleLogInDialogClose}
      />
      <SignUpDialog
        openSignUpDialog={openSignUpDialog}
        handleClose={handleSignUpDialogClose}
      />
    </Box>
  );
};
