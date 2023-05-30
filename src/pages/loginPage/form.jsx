import WidgetWrapper from "../../components/WidgetWrapper";
import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../state";
import { useDispatch } from "react-redux";

const initialLoginData = {
  email: "",
  password: "",
};

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const [formData, setFormData] = useState(initialLoginData);
  const URL = "https://jam-session.onrender.com/auth/login";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const loginAttempt = async (event) => {
    event.preventDefault();
    const login = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      if (!response.ok) {
        throw new Error(`POST request failed with status ${response.status}`);
      }
      const data = await response.json();
      dispatch(setLogin({ user: data.user, token: data.token}));
      window.alert("Logging in...");
      navigate("/home")
    } catch (error) {
      console.error("Error with POST request:", error);
      alert("Incorrect Login Information");
      navigate("/")
    }
  };


  return (
    <WidgetWrapper>
      <Typography variant="h5" align="center" mb={1}>
        Sign on to Jam Session
      </Typography>
      <Divider />
      <form onSubmit={loginAttempt}>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} align="center" mb={3}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Log In
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              onClick={() => {
                window.location = "/register";
              }}
              variant="contained"
              color="primary"
              size="large"
            >
              Create Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </WidgetWrapper>
  );
};

export default Form;
