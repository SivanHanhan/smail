import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import axios from "axios";

interface ComposeMailDialogProps {
  openMailDialog: boolean;
  handleMailDialogClose: () => void;
}

export const ComposeMailDialog = (props: ComposeMailDialogProps) => {
  return (
    <Dialog
      open={props.openMailDialog}
      onClose={props.handleMailDialogClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const mail = {
            sender: "ronen",
            reciever: "gadi",
            data: "from web",
            description: "a little story about fishing",
            date: "today",
          };

          axios
            .post("http://localhost:3000/mail/", mail)
            .then((response) => console.log(response.data))
            .then((error) => console.log(error));

          props.handleMailDialogClose();
        },
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleMailDialogClose}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};
