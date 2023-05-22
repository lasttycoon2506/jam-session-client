import WidgetWrapper from "../../components/WidgetWrapper";
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
// import { isEmail } from "validator";

const initialRegisterData = {
  name: "",
  email: "",
  password: "",
  location: "",
  bandExperience: "",
  genres: "",
  availability: "",
  instrumentName: "",
  yearsExperience: "",
  proficiency: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialRegisterData);
  const API_URL = "https://jam-session.onrender.com/auth/register";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    //Build instruments json object
    const instruments = {
      instrumentName: formData.instrumentName,
      yearsExperience: formData.yearsExperience,
      proficiency: formData.proficiency,
    };

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      location: formData.location,
      bandExperience: formData.bandExperience,
      genres: formData.genres,
      availability: formData.availability,
      instruments: instruments,
    };

    try {
      console.log(newUser);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`POST request failed with status ${response.status}`);
      }
      const responseData = await response.json();
      console.log("POST request successful");
      console.log(responseData);
      window.location = `/`;
    } catch (error) {
      console.error("Error with POST request:", error);
    }
  };

  return (
    <div>
      {/* <WidgetWrapper>Register Now to Start Jamming</WidgetWrapper> */}
      <WidgetWrapper>
        <Typography variant="h5" align="center" mb={2}>
          Register to Jam Session
        </Typography>
        <Divider />
        <div className="registerForm">
          <form onSubmit={register}>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={6}>
                {/* *<label htmlFor="">Name</label> */}
                <TextField
                  type="text"
                  fullWidth
                  label="Name"
                  name="name"
                  placeholder="Rodrigo00"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  maxLength="32"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* *<label htmlFor="">Email</label> */}
                <TextField
                  label="Email"
                  fullWidth
                  type="text"
                  placeholder="email@jam.sesh"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  title="ex: newuser@jamsesh.com"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password"
                  fullWidth
                  type="text"
                  name="password"
                  placeholder="8-16 Characters"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  min="8"
                  max="16"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                  title="Must contain at least 1 numer, 1 upper case letter, 1 lowercase letter"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  type="text"
                  name="location"
                  placeholder="Los Angeles, Ca"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Band Experience"
                  type="text"
                  name="bandExperience"
                  placeholder="3 Years"
                  value={formData.bandExperience}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Genres"
                  type="text"
                  name="genres"
                  placeholder="Heavy Metal, Slowcore, City Pop"
                  value={formData.type}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Availability"
                  type="text"
                  name="availability"
                  placeholder="M-F 3Pm"
                  value={formData.availability}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="h6" align="center" mb={1} mt={3}>
                Primary Instrument - you can add more later
              </Typography>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Instrument Name"
                  name="instrumentName"
                  type="text"
                  placeholder=""
                  value={formData.instrumentName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Years of Experience</InputLabel>
                <Select
                  fullWidth
                  label="Years of Experience"
                  name="yearsExperience"
                  type="text"
                  placeholder="0"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                >
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="9">9</MenuItem>
                  <MenuItem value="10">10+</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Proficiency</InputLabel>

                <Select
                  fullWidth
                  label="Proficiency"
                  name="proficiency"
                  type="text"
                  placeholder=""
                  value={formData.proficiency}
                  onChange={handleInputChange}
                >
                  <MenuItem value="Novice">Novice</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                  <MenuItem value="Expert">Expert</MenuItem>
                </Select>
              </Grid>
              <Typography variant="h6" align="left" mb={1} mt={3}>
                * - Required to register
              </Typography>
              <Grid item xs={12} align="center" mt={4}>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Grid>
            </Grid>

            {/* <div>
              -- Primary Instrument(you can add more later) --
              <div>
                <label htmlFor="">Instrument Name</label>
              </div>
              <div>
                <label htmlFor="">Years of Experice</label>
                <select
                  name="yearsExperience"
                  type="text"
                  placeholder="0"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10+</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Proficiency</label>
                <select
                  name="proficiency"
                  type="text"
                  placeholder=""
                  value={formData.proficiency}
                  onChange={handleInputChange}
                >
                  <option value="Novice">Novice</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div> */}
            {/* <button className="mt-3">Lets Jam!</button>
            <div>* - required</div> */}
          </form>
        </div>
      </WidgetWrapper>
    </div>
  );
};
export default RegisterPage;
