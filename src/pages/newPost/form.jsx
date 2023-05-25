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
import { useNavigate } from "react-router-dom";

const initialFormData = {
  userId: "",
  type: "",
  instrument: "",
  experience: "",
  genres: [],
  availability: "",
  recordingExperience: "",
  description: "",
  imagePath: "",
};

const Form = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);
  const tempUserId = "64664dc135ead82c97713735";
  const [formData, setFormData] = useState(initialFormData);
  const localUrl = `http://localhost:3001/posts`;
  const proxyUrl =
    "https://corsproxy.io/?" +
    encodeURIComponent(`https://jam-session.onrender.com/posts/${tempUserId}`);

  let url = localUrl;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("userId", tempUserId);
    form.append("type", formData.type);
    form.append("instrument", formData.instrument);
    form.append("experience", formData.experience);
    form.append("genres", formData.genres);
    form.append("availability", formData.availability);
    form.append("recordingExperience", formData.recordingExperience);
    form.append("description", formData.description);
    if (formData.image) {
      form.append("image", formData.image);
      form.append("imagePath", formData.image.name);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { Authorization: token },
        body: form,
      });
      const data = await response.json();
      console.log(data);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleGenreChange = (event, values) => {
    const selectedGenres = values.map((option) => option.trim());
    setFormData((prevFormData) => ({
      ...prevFormData,
      genres: selectedGenres,
    }));
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
              value={formData.genres}
              onChange={handleGenreChange}
              renderInput={(params) => (
                <TextField {...params} label="Genres" name="genres" />
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
            <Input
              name="image"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
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
