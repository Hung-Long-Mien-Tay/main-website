import React from "react";

const tags = {
  h1: "h1",
  h2: "h2", 
  h3: "h3",
  h4: "h4",
  sh1: "sh1",
  body: "p",
  "body-small": "p",
  small: "span"
};

const sizes = {
  h1: "text-5xl sm:text-6xl font-bold leading-extra-tight",
  h2: "text-2xl sm:text-4xl font-bold",
  h3: "text-2xl sm:text-4xl",
  h4:  "text-lg sm:text-2xl",
  sh1: "text-lg sm:text-xl",
  body:"text-md sm:text-lg",
  small: "text-sm sm:text-md"
};

const Typography = ({ variant, children, className, as }) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};

export default Typography;
