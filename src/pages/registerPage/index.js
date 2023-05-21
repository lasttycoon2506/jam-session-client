import WidgetWrapper from "../../components/WidgetWrapper";
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
    }

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
      <WidgetWrapper>Register Now to Start Jamming</WidgetWrapper>
      <WidgetWrapper>
        <div className="registerForm">
          <form onSubmit={register}>
            <div>
              *<label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Rodrigo00"
                value={formData.name}
                onChange={handleInputChange}
                required
                maxLength="32"
              ></input>
            </div>

            <div>
              *<label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="email@jam.sesh"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="ex: newuser@jamsesh.com"
              ></input>
            </div>

            <div>
              *<label htmlFor="">Password</label>
              <input
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
              ></input>
            </div>

            <div>
              *<label htmlFor="">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Los Angeles, Ca"
                value={formData.location}
                onChange={handleInputChange}
                required
              ></input>
            </div>

            <div>
              <label htmlFor="">Band Experience</label>
              <input
                type="text"
                name="bandExperience"
                placeholder="3 Years"
                value={formData.bandExperience}
                onChange={handleInputChange}
              ></input>
            </div>

            <div>
              <label htmlFor="">Genres</label>
              <input
                type="text"
                name="genres"
                placeholder="Heavy Metal, Slowcore, City Pop"
                value={formData.type}
                onChange={handleInputChange}
              ></input>
            </div>

            <div>
              <label htmlFor="Availability ">Availability</label>
              <input
                type="text"
                name="availability"
                placeholder="M-F 3Pm"
                value={formData.availability}
                onChange={handleInputChange}
              ></input>
            </div>

            <div>
              -- Primary Instrument(you can add more later) --
              <div>
                <label htmlFor="">Instrument Name</label>
                <input
                  name="instrumentName"
                  type="text"
                  placeholder=""
                  value={formData.instrumentName}
                  onChange={handleInputChange}
                ></input>
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
            </div>
            <button className="mt-3">Lets Jam!</button>
            <div>* - required</div>
          </form>
        </div>
      </WidgetWrapper>
    </div>
  );
};
export default RegisterPage;
