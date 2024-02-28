import React from 'react';
import PropTypes from 'prop-types';

function ArrowRight({ color, className, ...props }) {
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
        d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
      />
    </svg>
  );
}

ArrowRight.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

ArrowRight.defaultProps = {
  color: 'black',
  className: 'w-[20px] h-[20px] ',
};

export default ArrowRight;
