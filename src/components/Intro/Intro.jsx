import React, { useContext } from "react";
import "./Intro.css";
import { themeContext } from "../../Context";

import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hai darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}></span>
          
        
        </div>
        <Link to="contact" smooth={true} spy={true}>
</Link>

      
     
<div className="container">
      
      <textarea name="check Text here" className="user" placeholder="Check text here"/>
      <input type="submit" value="Send" className="button"/>
  </div>
  

       

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};


export default Intro;
