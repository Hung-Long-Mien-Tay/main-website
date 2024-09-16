import React from "react";
import { Link } from "react-router-dom"; 

const FooterButton = ({ buttonLink }) => {
  return (
    <Link key={buttonLink.name} to={buttonLink.href} className="text-md sm:text-lg text-white font-normal mb-3">
      <span>{buttonLink.name}</span>
    </Link>
  );
};

export default FooterButton;
  