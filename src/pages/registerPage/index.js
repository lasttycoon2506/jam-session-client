import WidgetWrapper from "../../components/WidgetWrapper";
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { isEmail } from "validator";

const initialRegisterData = {
  name: "",
  email: "",
  password: "",
  location: "",
  experience: "",
  genres: "",
  availability: "",
  instruments: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialRegisterData);
  const API_URL = "https://jam-session.onrender.com/auth/register"; // might be some issue here with cors

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  //TODO: Validation that user has input required fields - also add * for required fields

  //TODO: build instrument json object

  const register = async (event) => {
    event.preventDefault();
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      location: formData.location,
      bandExperience: formData.bandExperience,
      genres: formData.genres,
      availability: formData.availability,
      instruments: formData.instruments,
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
      
    } catch (error) {
      console.error("Error with POST request:", error);
    }
  };


  return (
    <div>
      <WidgetWrapper>Register Now to Start Jamming</WidgetWrapper>
      <WidgetWrapper>
        <div className="registerForm">
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Rodrigo00"
              value={formData.name}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="email@jam.sesh"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              type="text"
              name="password"
              placeholder="8-16 Characters"
              value={formData.password}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <label htmlFor="">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Los Angeles, Ca"
              value={formData.location}
              onChange={handleInputChange}
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
              value={formData.type}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            -- Primary Instrument(you can add more later) --
            <div>
              <label htmlFor="">Instrument Name</label>
              <input name="instrumentName" type="text" placeholder=""></input>
            </div>
            <div>
              <label htmlFor="">Years of Experice</label>
              <select
                name="yearsExperience"
                type="text"
                placeholder="0"
                value={formData.type}
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
                value={formData.type}
                onChange={handleInputChange}
              >
                <option value="Novice">Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>
          <button className="mt-3" onClick={register}>
            Lets Jam!
          </button>
        </div>
      </WidgetWrapper>
    </div>
  );
};
export default RegisterPage;
