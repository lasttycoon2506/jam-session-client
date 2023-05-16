import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  // These functions allow you to modify the state
  reducers: {
    setLogin: () => {},
    setLogout: () => {},
    setPosts: () => {},
    setPost: () => {},
    setRegistration: () => {}
  },
});

export const { setLogin, setLogout, setPosts, setPost, setRegistration } = rootSlice.actions;

export default rootSlice.reducer;
