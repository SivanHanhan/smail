import { useState, useEffect } from "react";
import MailList from "./MailList"; // assuming MailList is in the same directory
import { Box, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";
import { ComposeMailDialog } from "./ComposeMailDialog";
// import {mails} from '../mails/mails'; // assuming mails.js is in the same directory

export const MailView = () => {
  const [mails, setMails] = useState([]);
  const [openMailDialog, setOpenMailDialog] = React.useState(false);

  const handleMailDialogOpen = () => {
    setOpenMailDialog(true);
  };

  const handleMailDialogClose = () => {
    setOpenMailDialog(false);
  };

  useEffect(() => {
    fetch("http://localhost:3000/mail/") // replace with your server URL and route
      .then((response) => response.json())
      .then((data) => setMails(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(mails);

  return (
    <>
      <section style={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ mt: "4rem" }}>
          <MailList mails={mails} />
          <Button
            onClick={handleMailDialogOpen}
            sx={{ mt: "2rem" }}
            variant="outlined"
            startIcon={<CreateIcon />}
          >
            Compose
          </Button>
        </Box>
      </section>
      <ComposeMailDialog
        openMailDialog={openMailDialog}
        handleMailDialogClose={handleMailDialogClose}
      />
    </>
  );
};
