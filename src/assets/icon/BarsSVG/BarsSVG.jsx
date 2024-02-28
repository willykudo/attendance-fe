import React from 'react';
import PropTypes from 'prop-types';

function BarsSVG({ color, className, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke={color}
      {...props}
      className={`${className} cursor-pointer`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 9h16.5m-16.5 6.75h16.5'
      />
    </svg>
  );
}

BarsSVG.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

BarsSVG.defaultProps = {
  color: 'black',
  className: 'w-[20px] h-[20px] ',
};

export default BarsSVG;
