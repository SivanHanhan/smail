import { Typography } from "@mui/material";

export const NoUserView = () => {
  return (
    <Typography variant="h4" sx={{ mt: "10rem" }}>
      You are not logged in, if you have an account, please log in. if you don't
      have an account, please sign up.
    </Typography>
  );
};
