import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { themeSettings } from "./theme.js";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/profile/:userId" element={<ProfilePage />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
