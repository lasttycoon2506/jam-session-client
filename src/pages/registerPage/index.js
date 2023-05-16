import WidgetWrapper from "../../components/WidgetWrapper";
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LineAxisOutlined } from "@mui/icons-material";
// import { isEmail } from "validator";

// const API_URL = "https://jam-session.onrender.com/auth/register"
const API_URL = "http://localhost:3001/auth/register"
// const API_URL = "mongodb+srv://Capstone:JamSession@cluster0.g0pkoy8.mongodb.net/?retryWrites=true&w=majority"
// const API_URL = "JamSession@cluster0.g0pkoy8.mongodb.net/?retryWrites=true&w=majority"

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [genres, setGenres] = useState("");
  const [availability, setAvailability] = useState("");
  const [instruments, setInstruments] = useState("");
  const [registration, setRegistration] = useState("setRegistration");
  const [successful, setSuccessful] = useState(false);

  const dispatch = useDispatch();
  const postId = useSelector((state) => state.register)

  const register = async (name, email, password, location, experience, genres, availability, instruments) => {
    const requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-Type': 'applicatoin/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        location: location,
        experience: experience,
        genres: genres,
        availability: availability,
        instruments: instruments
      })
    };
    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => dispatch(setRegistration({ postId: data.id })))
      .catch((error) => console.error(error));
  };



  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    console.log(name);
    // form.current.validateAll();

    // if(chechBtn.current.context._errors.length === 0){
    //   dispatch(register(name, email, password, location, experience, genres, availability, instruments))
    //   .then(() => {
    //     setSuccessful(true);
    //   })
    //   .catch(()=> {
    //     setSuccessful(false);
    //   });
    // }
    dispatch(register(name, email, password, location, experience, genres, availability, instruments))
      .then(() => {
        setSuccessful(true);
      })
      .catch(()=> {
        setSuccessful(false);
      });
  };

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  }
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setName(email);
  }
  const onChangePassword = (e) => {
    const password = e.target.value;
    setName(password);
  }
  const onChangeLocation = (e) => {
    const location = e.target.value;
    setName(location);
  }
  const onChangeExperience = (e) => {
    const experience = e.target.value;
    setName(experience);
  }
  const onChangeGenres = (e) => {
    const genres = e.target.value;
    setName(genres);
  }
  const onChangeAvailability = (e) => {
    const availability = e.target.value;
    setName(availability);
  }
  const onChangeInstruments = (e) => {
    const instruments = e.target.value;
    setName(instruments);
  }

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
              value={name}
              onChange={onChangeName}
            ></input>
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input 
            type="text" 
            placeholder="email@jam.sesh"
            name="email"
            ></input>
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input 
            type="text" 
            name="password"
            placeholder="8-16 Characters"></input>
          </div>

          <div>
            <label htmlFor="">Location</label>
            <input 
            type="text" 
            name="location"
            placeholder="Los Angeles, Ca"></input>
          </div>

          <div>
            <label htmlFor="">Band Experience</label>
            <input 
            type="text" 
            name="bandExperience"
            placeholder="3 Years"></input>
          </div>

          <div>
            <label htmlFor="">Genres</label>
            <input
              type="text"
              name="genres"
              placeholder="Heavy Metal, Blues, RnB, Slowcore, City Pop"
            ></input>
          </div>

          <div>
            <label htmlFor="Availability ">Availability</label>
            <input 
            type="text" 
            name="availability"
            placeholder="M-F 3Pm"></input>
          </div>

          <div>
            -- Primary Instrument(you can add more later) --
            <div>
              <label htmlFor="">Instrument Name</label>
              <input name="instrumentName" type="text" placeholder=""></input>
            </div>
            <div>
              <label htmlFor="">Years of Experice</label>
              <select name="yearsExperience" type="text" placeholder="">
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
              <select name="proficiency" type="text" placeholder="">
                <option value="Novice">Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>
          <button className="mt-3" onClick={handleRegister}>Lets Jam!</button>
        </div>
      </WidgetWrapper>
    </div>
  );
};
export default RegisterPage;
