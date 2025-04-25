import React from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  fallbackSrc,
  alt, 
  width, 
  height, 
  className, 
  loading = 'lazy',
  ...props 
}) => {
  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      {fallbackSrc && <source srcSet={fallbackSrc} type="image/png" />}
      <img 
        src={fallbackSrc || src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager', 'auto'])
};

export default OptimizedImage;