import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import SendIcon from "@mui/icons-material/Send";
import { logIn } from "../ApiService";
import { GlobalContext } from "../contexts/GlobalContext";

interface LogInDialogProps {
  openDialog: boolean;
  handleClose: () => void;
}

export const LogInDialog = (props: LogInDialogProps) => {
    const { setUser } = useContext(GlobalContext);

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        const user = {
          email: values.email,
          password: values.password,
        };
  
        const response = await logIn(user);
        console.log(response.data);
        setUser(response.data.email);
        props.handleClose();
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <Dialog
      open={props.openDialog}
      onClose={props.handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          formik.handleSubmit();
          props.handleClose();
        },
      }}
    >
          <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <label htmlFor="firstName">email</label>
        <input
          id="email"
          name="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="reciever">password</label>
        <input
          id="password"
          name="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
