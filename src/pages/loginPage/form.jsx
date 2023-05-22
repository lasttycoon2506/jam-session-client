import WidgetWrapper from "../../components/WidgetWrapper";
import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Divider } from "@mui/material";

const initialLoginData = {
  email: "",
  password: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialLoginData);
  const API_URL = "https://jam-session.onrender.com/auth/login";

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
      console.log(login);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      if (!response.ok) {
        throw new Error(`POST request failed with status ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData.user);
      window.alert("Logging in...");
      window.location = "/home";
    } catch (error) {
      console.error("Error with POST request:", error);
      alert("Incorrect Login Information");
      window.location = "/";
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
              value={formData.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button type="submit" variant="contained" color="primary" size="large">
              Log In
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="h6" align="center" mb={1} color="primary">
              Dont have an account? Register now
            </Typography>
            <Button
              onClick={() => {
                window.location = "/register";
              }}
              variant="outlined"
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
