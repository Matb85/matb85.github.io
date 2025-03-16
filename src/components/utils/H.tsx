import React from 'react';
import { normalise } from './utils';

interface Props {
  text: string;
}

const H: React.FC<Props> = ({ text }) => {
  return (
      <div
          id={normalise(text)}
          data-aos="fade-zoom-in"
          className="text-center relative mt-32 mb-10 md:mt-44 md:mb-20 w-full"
      >
        <h3 className="text-4xl sm:text-6xl xl:text-8xl absolute md:top-10 w-full">{text}</h3>
        {[0,1,2].map((i) => (
            <h3
                key={i}
                aria-hidden="true"
                className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl leading-[0.4]! opacity-5 whitespace-nowrap"
            >
              {text}
            </h3>
        ))}
      </div>
  );
};

export default H;
