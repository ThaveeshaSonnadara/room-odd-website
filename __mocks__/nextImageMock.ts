// impeccable-disable broken-image
import React from 'react';

// Simple mock for next/image that renders a plain <img> element using React.createElement
const Image = (props:any) => {
  const {src, alt, ...rest} = props;
  return React.createElement('img', { src, alt, ...rest });
};
export default Image;
