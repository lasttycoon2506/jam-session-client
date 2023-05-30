import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: "",
    email: "",
    password: "",
    name: "",
    location: "",
    instruments: {},
    genres: "",
    availability: "",
    experience: ""
  },
  profile: {},
  posts: [],
  token: "",
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  // These functions allow you to modify the state
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setProfile: (state, action) => {
      state.profile = action.payload.profile;
    },
    setRegistration: () => {},
    setUser: (state, action) => {
      state.user = action.payload.user;
    }
  },
});

export const { setLogin, setLogout, setPosts, setProfile, setRegistration, setUser } = rootSlice.actions;

export default rootSlice.reducer;
