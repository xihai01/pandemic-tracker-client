import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box, styled, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function AdminLogin() {
  const [state, setState] = useState({ email: "", password: "", error: false });
  const navigate = useNavigate();

  function validate(e) {
    e.preventDefault();
    axios
      .get(`/admin/login?email=${state.email}&password=${state.password}`)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("auth", "true");
          navigate("/adminboard")
        }
      })
      .catch((e) => {
        console.log(e.message);
        setState((prevState) => {
          return { ...prevState, error: true };
        });
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value, error: false };
    });
  }

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "100px auto",
  };
  const avatarStyle = { backgroundColor: "#00AB55" };
  const btnStyle = {
    margin: "8px 0",
    backgroundColor: "#005249" };

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.h3,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

  return (
    <Grid container spacing={2} alignItems="center"  justifyContent="center">
      <Grid item xs={7}>
        <Paper elevation={0}>
        <Box
          component="img"
          src="images/undraw_server_down_s-4-lk.svg"
        />
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={4} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon style={{ border: "none" }} />
            </Avatar>
            <Typography variant="h4">Admin</Typography>
            {state.error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>Invalid email or password</strong>
              </Alert>
            )}
          </Grid>
          <form onSubmit={validate}>
            <TextField
              fullWidth
              required
              type="email"
              name="email"
              placeholder="Enter Email address"
              label="Email"
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              required
              name="password"
              type="password"
              placeholder="Enter valid password"
              label="Password"
              value={state.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              onClick={validate}
              color="primary"
              variant="contained"
              fullWidth
              style={btnStyle}
            >
              SIGN IN
            </Button>
          </form>
          <Typography>
            <Link href="#">Forgot Password?</Link>
          </Typography>
          <Typography>
            {" "}
            Create new User
            <Link href="#"> Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>


    </Grid>
  );
}
