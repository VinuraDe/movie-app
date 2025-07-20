
import React from "react";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className = "" }) => {
  return (
    <h1 className={`text-white ${className}`}>
      {text}
    </h1>
  );
};

export default Heading;
