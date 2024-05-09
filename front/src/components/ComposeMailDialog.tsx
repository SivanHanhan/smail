import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import SendIcon from "@mui/icons-material/Send";

interface ComposeMailDialogProps {
  openMailDialog: boolean;
  handleMailDialogClose: () => void;
}

export const ComposeMailDialog = (props: ComposeMailDialogProps) => {
  const formik = useFormik({
    initialValues: {
      sender: "",
      reciever: "",
      data: "",
      description: "",
    },
    onSubmit: (values) => {
      const mail = {
        sender: values.sender,
        reciever: values.reciever,
        data: values.data,
        description: values.description,
        date: "today",
      };

      axios
        .post("http://localhost:3000/mail/", mail)
        .then((response) => console.log(response.data))
        .then((error) => console.log(error));

      props.handleMailDialogClose();

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Dialog
      open={props.openMailDialog}
      onClose={props.handleMailDialogClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          formik.handleSubmit();
          props.handleMailDialogClose();
        },
      }}
    >
      <DialogTitle>Compose New Mail</DialogTitle>
      <DialogContent>
        <label htmlFor="firstName">sender</label>
        <input
          id="sender"
          name="sender"
          placeholder="John"
          onChange={formik.handleChange}
          value={formik.values.sender}
        />

        <label htmlFor="reciever">reciever</label>
        <input
          id="reciever"
          name="reciever"
          placeholder="Doe"
          onChange={formik.handleChange}
          value={formik.values.reciever}
        />

        <label htmlFor="email">subject</label>
        <input
          id="description"
          name="description"
          placeholder="subject"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <label htmlFor="email">message</label>
        <input
          id="data"
          name="data"
          placeholder="the whole thing"
          onChange={formik.handleChange}
          value={formik.values.data}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};
