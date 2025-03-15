import React from 'react';
import photo from './observer';

interface DataI {
  src: string;
  alt: string;
  className: string;
  sizes: number[];
  args?: Record<string, string>;
}

const Photo: React.FC<DataI> = (props) => {
  const { genSrcset } = photo(`./images/thumbnail_${props.src}`, props.sizes);

  return (
      <img
          className={`lazy-photo ${props.className}`}
          src={`./images/thumbnail_${props.src}`}
          data-srcset={genSrcset}
          alt={props.alt}
          {...props.args}
      />
  );
};

export default Photo;
