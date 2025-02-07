import React from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function ToggleDarkModeComponent({ darkMode, setDarkMode }) {
  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div onClick={handleDarkMode} className="cursor-pointer">
      {darkMode ? <CiLight size={45} /> : <MdDarkMode size={45} />}
    </div>
  );
}

export default ToggleDarkModeComponent;
