// Content2.jsx
import React from "react";
import Typography from "../Typography";

const Content2 = ({ buttonlinks }) => {
  const IMAGES = {
    farmer: "src/assets/products/farmer-hand.jpg",
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center">
      {/* Image */}
      <img src={IMAGES.farmer} alt="Farmer" className="rounded-tr-3xl xs:w-full sm:w-1/2 me-20 my-20 shadow-2xl shadow-greyShadow" />
      {/* Text Column */}
      <div className="flex-col xs:mx-10 lg:mx-0 lg:me-10 space-y-5">
        {/* 2.1 Green Gradient Bar */}
        <div className="bg-green-gradient-horizontal h-1 rounded-full w-1/2"></div>
        {/* 2.2 Text */}
        <Typography variant="h2" className="text-black ">
          Nguyên Liệu <span className="text-primaryGreen">Chất Lượng Cao</span>
        </Typography>
        <Typography variant="body" className="text-black sm:w-3/4">
          Với hơn 20 năm kinh nghiệm, Hưng Long Miền Tây là đối tác tin cậy của
          nhiều nhà sản xuất thức ăn chăn nuôi Việt Nam. Chúng tôi
          đảm bảo chất lượng của sản phẩm đầu ra và duy trì trên 95% lượng khách hàng qua từng năm.
        </Typography>
        {/* 2.3 Learn More Button */}
        {buttonlinks.map((link) => (
          <button
            key={link.name}
            href={link.href}
            className="bg-primaryGreen text-white px-6 py-3 rounded-tr-3xl flex items-center space-x-2 mt-4"
          >
            <span>{link.name}</span>
            <img src={link.icon} alt="Arrow" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Content2;
