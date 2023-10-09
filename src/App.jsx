import React, { useState } from "react";
import "./App.css";


const App = () => {

  const [isKYCStarted, setIsKYCStarted] = useState(false);

  const handleClick = () => {
    setIsKYCStarted(true);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  
 return (
  <div className="container">
    <h1 className="heading">EUMLET</h1>
    <div className="buttonWrapper">
      <button className="startButton" onClick={handleClick}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
        START EUMLET_AUTH
      </button>       
    </div>
  </div>
  );
};

export default App;
