import React from "react";
import Typography from "../Typography";
// images
import globalStats from "./../../assets/homepage/global.png";
const Content1 = () => {
  const picture = [{ src: globalStats }];

  return (
    <div>
      <div className="bg-white">
        {/* 1. we're global */}
        <Typography variant="h2" className="text-black mx-5 sm:mx-10">
          Đối Tác <span className="text-primaryGreen">Chiến Lược</span>
        </Typography>
        {/* 2. global stats img */}
        <div className="flex items-center justify-center">
          <img src={picture[0].src} alt="Global Stats" />
        </div>
      </div>
    </div>
  );
};

export default Content1;
