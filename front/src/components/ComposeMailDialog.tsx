import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
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
        <TextField
          label={"sender email"}
          variant="outlined"
          fullWidth
          value={formik.values.sender}
          onChange={formik.handleChange}
          name={"sender"}
          sx={{ mt: 2 }}
        />
        <TextField
          label={"reciever email"}
          variant="outlined"
          fullWidth
          value={formik.values.reciever}
          onChange={formik.handleChange}
          name={"reciever"}
          sx={{ mt: 2 }}
        />
        <TextField
          label={"subject"}
          variant="outlined"
          fullWidth
          value={formik.values.description}
          onChange={formik.handleChange}
          name={"description"}
          sx={{ mt: 2 }}
        />
        <TextField
          label={"message"}
          variant="outlined"
          fullWidth
          value={formik.values.data}
          onChange={formik.handleChange}
          name={"data"}
          multiline
          maxRows={4}
          sx={{ mt: 2 }}
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
