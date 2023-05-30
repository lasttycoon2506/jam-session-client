import WidgetWrapper from "../../components/WidgetWrapper";
import React, { useState} from "react";
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

const Form = () => {
  const [formData, setFormData] = useState(initialRegisterData);
  const API_URL = "https://jam-session.onrender.com/auth/register";

  const isTooLong = (name) => name.length > 32;
  
  const isEmailValid = (email) =>{
    if(email.length < 1) return true;
    const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    if (emailRegex.test(email)) return true;
    else return false;
  }
  
  const isPassValid = (pass) => {
    if(pass.length < 1) return true;
    const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/);
    if (passRegex.test(pass)) return true;
    else return false;

  }

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
    const instruments = [{
      instrumentName: formData.instrumentName,
      yearsExperience: formData.yearsExperience,
      proficiency: formData.proficiency,
    }];

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
      <WidgetWrapper>
        <Typography variant="h5" align="center" mb={2}>
          Register to Jam Session
        </Typography>
        <Divider />
        <div className="registerForm">
          <form onSubmit={register}>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="text"
                  fullWidth
                  label="Name"
                  name="name"
                  placeholder="Rodrigo00"
                  value={formData.name}
                  error={isTooLong(formData.name)}
                  helperText={isTooLong(formData.name) ? "Name is not Valid, try less than 32 characters": ""}
                  onChange={handleInputChange}
                  maxLength="32"
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  fullWidth
                  type="text"
                  placeholder="email@jam.sesh"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  error={!isEmailValid(formData.email)}
                  helperText={!isEmailValid(formData.email) ? "Email is not valid": ""}
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
                  error={!isPassValid(formData.password)}
                  helperText={!isPassValid(formData.password) ? "Password is not valid, Must be 8-16 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character": ""}
                  title=" Must be 8-16 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character"
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
                  error={isTooLong(formData.location)}
                  helperText={isTooLong(formData.location) ? "Location is not Valid, try less than 32 characters": ""}
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
          </form>
        </div>
      </WidgetWrapper>
    </div>
  );
};
export default Form;
