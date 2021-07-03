import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
      <div className="footer"
        style={{
          textAlign: "center",
          marginBottom: 5,
        }}
      >
        Made with ♥ by{" "}
        <a
          href="https://github.com/PranavJeurkar"
          style={{ cursor: "pointer" }}
        >
          Pranav Jeurkar
        </a>
      </div>
    );
  };
  
  export default Footer;