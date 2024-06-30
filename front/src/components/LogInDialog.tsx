import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
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
      setUser(response.data);
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
        <TextField
          label={"email"}
          variant="outlined"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          name={"email"}
          sx={{ mt: 2 }}
        />
        <TextField
          label={"password"}
          variant="outlined"
          fullWidth
          value={formik.values.password}
          onChange={formik.handleChange}
          name={"password"}
          sx={{ mt: 2 }}
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
