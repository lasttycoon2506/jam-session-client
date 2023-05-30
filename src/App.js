import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { themeSettings } from "./theme.js";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import RegisterPage from "./pages/registerPage";
import NewPostPage from "./pages/newPostPage/index.js";
import EditUserPage from "./pages/editUserPage";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  const token = useSelector((state) => state.token);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={
                token ? <Navigate to="/home" /> : <Navigate to="/login" />
              }
            />
            <Route
              path="login"
              element={token ? <Navigate to="/home" /> : <LoginPage />}
            />
            <Route
              path="/home"
              element={token ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/:userId"
              element={token ? <ProfilePage /> : <Navigate to="/login" />}
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/create"
              element={token ? <NewPostPage /> : <Navigate to="/login" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
