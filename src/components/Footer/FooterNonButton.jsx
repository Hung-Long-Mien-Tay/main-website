import React from "react";
import Typography from "../Typography";

const FooterNonButton = ({ content }) => {
  return (
    <Typography variant="body" className="text-white font-normal mb-3">
      {content}
    </Typography>
  );
};

export default FooterNonButton;
  