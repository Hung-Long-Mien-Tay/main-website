import React from "react";
import Typography from "../Typography";
import { Link } from "react-router-dom";
import FooterButton from "./FooterButton";
import FooterNonButton from "./FooterNonButton";
import buttonConfig from "../../config/buttonConfig";

// logo
import logofull from "../../assets/logo/logo_icon.png";

const Footer = ({ buttonlinks }) => {
  const logo = [{ src: logofull }];
  return (
    <div className="bg-green-gradient-tr h-full">
      <div className="flex f
      lex-wrap pt-20 justify-between xs:mx-5 sm:mx-32">
        <Typography variant="h2" className="text-white font-normal mt-5">
          We Farm, <span className="text-primaryGreen font-bold">You Eat</span>
        </Typography>
        {/* Button */}
        {buttonlinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="bg-primaryGreen text-white px-6 py-3 rounded-tr-3xl flex items-center space-x-2 mt-4"
          >
            <span>{link.name}</span>
            <img src={link.icon} alt="Arrow" />
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-between py-20 xs:mx-5 sm:mx-32">
        <div className="flex-col">
          <img alt="Logo" src={logo[0].src} className="w-auto" />
        </div>

        <div className="flex flex-col px-5">
          <Typography
            variant="sh1"
            className="text-primaryGreen font-bold mb-3"
          >
            Link
          </Typography>
          <FooterButton buttonLink={buttonConfig.home}></FooterButton>
          <FooterButton buttonLink={buttonConfig.products}></FooterButton>
          <FooterButton buttonLink={buttonConfig.news}></FooterButton>
        </div>

        <div className="flex flex-col  px-5">
          <Typography
            variant="sh1"
            className="text-primaryGreen font-bold mb-3"
          >
            About Us
          </Typography>
          <FooterButton buttonLink={buttonConfig.vision}></FooterButton>
          <FooterButton buttonLink={buttonConfig.mission}></FooterButton>
          <FooterButton buttonLink={buttonConfig.careers}></FooterButton>
        </div>

        <div className="flex flex-col  ">
          <Typography
            variant="sh1"
            className="text-primaryGreen font-bold mb-3"
          >
            Contact Us
          </Typography>
          <FooterNonButton content="Address here"></FooterNonButton>
          <FooterNonButton content="Phone Number here"></FooterNonButton>
          <FooterNonButton content="hunglongmientay@email"></FooterNonButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
