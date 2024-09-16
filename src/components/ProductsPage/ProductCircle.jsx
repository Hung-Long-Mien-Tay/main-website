import React from "react";
import ButtonIcon from "./ButtonIcon";

import CassavaWhiteIcon from "./../../assets/icons/cassava_whiteic.png";
import CassavaBlackIcon from "./../../assets/icons/cassava_blackic.png";
import CassavaPowWhiteIcon from "./../../assets/icons/cassavapowder_whiteic.png";
import CassavaPowBlackIcon from "./../../assets/icons/cassavapowder_blackic.png";
import WheatWhiteIcon from "./../../assets/icons/wheat_whiteic.png";
import WheatBlackIcon from "./../../assets/icons/wheat_blackic.png";
import WheatPowWhiteIcon from "./../../assets/icons/wheatpowder_whiteic.png";
import WheatPowBlackIcon from "./../../assets/icons/wheatpowder_blackic.png";

const ProductCircle = () => {
  const icons = [
    { icon1: CassavaWhiteIcon, icon2: CassavaBlackIcon },
    { icon1: CassavaPowWhiteIcon, icon2: CassavaPowBlackIcon },
    { icon1: WheatWhiteIcon, icon2: WheatBlackIcon },
    { icon1: WheatPowWhiteIcon, icon2: WheatPowBlackIcon },
  ];
  return (
    <div className="px-20">
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          // margin: "40px auto",
          borderRadius: "50%",
          border: "2px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="src\assets\products\packaging.png"
          alt="Central"
          style={{
            width: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {icons.map((item, index) => (
          <ButtonIcon
            key={index}
            icon1={item.icon1}
            icon2={item.icon2}
            width={60}
            style={{
              position: "absolute",
              top: `${50 + 45 * Math.cos((2 * Math.PI * index) / icons.length)}%`,
              left: `${50 + 45 * Math.sin((2 * Math.PI * index) / icons.length)}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCircle;
