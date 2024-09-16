// Hero.jsx
import React from "react";
import Typography from "../Typography";

const Hero = ({ buttonlinks }) => {
  return (
    <div className="hero-section flex flex-col justify-between h-full">
      {/* HERO */}
      {/* 1 */}
      <div className="hero-text text-left mt-52 mb-10 sm:w-full md:w-2/3">
        <Typography variant="h1" className="font-sans text-white mb-10">
        Giải Pháp Cho Ngành Thức Ăn Chăn Nuôi Bền Vững
        </Typography>
        <Typography
          variant="sh1"
          className="font-sans text-white text-opacity-60 "
        >
          Chào mừng đến với Hưng Long Miền Tây. Chúng tôi cam kết cung cấp những
          nguyên liệu nông sản chất lượng cao, đóng góp vào sự phát triển bền
          vững của ngành chăn nuôi Việt Nam.
        </Typography>
      </div>
      {/* 2 */}
      <div className="button-container bg-white p-5 sm:p-10">
        {buttonlinks.map((item) => (
          <button
            key={item.name}
            href={item.href}
            className="flex items-center my-5"
          >
            <Typography variant="body" className="font-bold">
              {item.name}
            </Typography>
            <img src={item.icon} alt="Arrow" className="ml-4" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
