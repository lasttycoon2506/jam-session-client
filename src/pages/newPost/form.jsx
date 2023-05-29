import React, { useState } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Grid,
  Input,
  Typography,
  Divider,
} from "@mui/material";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";

const initialFormData = {
  userId: "",
  type: "",
  instrument: "",
  experience: "",
  genres: "",
  availability: "",
  recordingExperience: "",
  description: "",
  images: [],
};

const Form = () => {
  const userId = useSelector((state) => state.user._id);
  const tempUserId = "64664dc135ead82c97713735";
  const [formData, setFormData] = useState(initialFormData);
  const localUrl = `http://localhost:3001/posts/${userId}`;
  const url =
    "https://corsproxy.io/?" +
    encodeURIComponent(`https://jam-session.onrender.com/posts/${userId}`);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    if (name === "genres") {
      newValue = Array.isArray(value) ? value.join(", ") : value;
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = {
      type: formData.type,
      instrument: formData.instrument,
      experience: formData.experience,
      genres: formData.genres,
      availability: formData.availability,
      recordingExperience: formData.recordingExperience,
      description: formData.description,
      images: formData.images,
    };
    try {
      console.log(form);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = () => {
        imagesArray.push(reader.result);
        setFormData({
          ...formData,
          images: imagesArray,
        });
      };
    }
  };

  return (
    <WidgetWrapper>
      <Typography variant="h5" align="center" mb={1}>
        New Post
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="">--Please choose an option--</MenuItem>
                <MenuItem value="Offering">Offering</MenuItem>
                <MenuItem value="Wanted">Wanted</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Instrument</InputLabel>
              <Select
                name="instrument"
                value={formData.instrument}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="">--Please choose an option--</MenuItem>
                <MenuItem value="guitar">Guitar</MenuItem>
                <MenuItem value="bass">Bass</MenuItem>
                <MenuItem value="drums">Drums</MenuItem>
                <MenuItem value="piano">Piano</MenuItem>
                <MenuItem value="vocals">Vocals</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              fullWidth
              options={[
                "Rock",
                "Pop",
                "Hip hop",
                "Electronic",
                "Jazz",
                "Blues",
                "Country",
                "Folk",
                "Classical",
                "World",
                "Other",
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Genres"
                  name="genres"
                  value={formData.genres}
                  onChange={handleInputChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Availability"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Recording Experience"
              name="recordingExperience"
              value={formData.recordingExperience}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Upload Images</InputLabel>
            <Input type="file" accept="image/*" onChange={handleImageUpload} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </WidgetWrapper>
  );
};

export default Form;
