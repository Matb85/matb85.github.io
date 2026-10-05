import React from "react";
import { normalise } from "./utils";

interface Props {
  text: string;
}

const H: React.FC<Props> = ({ text }) => {
  return (
    <header id={normalise(text)} className="text-center scroll-mt-24 mt-10 md:mt-16 mb-6 w-full px-4">
      <h2 className="text-5xl md:text-6xl font-primary">{text}</h2>
    </header>
  );
};

export default H;
