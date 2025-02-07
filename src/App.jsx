import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

//devMode
// axios.defaults.baseURL = "http://localhost:3000";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.theme = "";
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
      <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
