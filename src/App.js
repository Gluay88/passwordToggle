import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

import "./App.css";

const App = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className="wrapper">
      <div className="input-field">
        <input type={type} />
        <span onClick={handleToggle}>
          <Icon icon={icon} size={25}></Icon>
        </span>
      </div>
    </div>
  );
};

export default App;
