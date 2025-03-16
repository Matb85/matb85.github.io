import React from 'react';
import photo from './observer';

interface DataI {
  src: string;
  alt: string;
  className: string;
  sizes: number[];
  args?: Record<string, string>;
  fullUrl?: boolean;
}

const Photo: React.FC<DataI> = (props) => {
  const url = props.fullUrl ? props.src : `/images/thumbnail_${props.src}`;
  const { genSrcset } = photo(url, props.sizes);
  return (
      <img
          className={`lazy-photo ${props.className}`}
          src={url}
          data-srcset={genSrcset}
          alt={props.alt}
          {...props.args}
      />
  );
};

export default Photo;
