import React, { useState } from "react";

const ButtonIcon = ({ icon1, icon2, active, width = 100, height = 100, style, onClick }) => {
  // The icon displayed depends on the "active" prop passed from the parent component
  const currentIcon = active ? icon2 : icon1;

  return (
    <button onClick={onClick} style={{ ...style, background: "none", border: "none", padding: 0 }}>
      <img src={currentIcon} alt="Icon Button" width={width} height={height} />
    </button>
  );
};

export default ButtonIcon;
