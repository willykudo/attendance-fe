import React from 'react';
import PropTypes from 'prop-types';

function DeleteSVG({ color, className, ...props }) {
  return (
    <svg
      viewBox='0 0 24 24    '
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={`${className} cursor-pointer`}
    >
      <path
        d='M19.3249 9.4668C19.3249 9.4668 18.7819 16.2018 18.4669 19.0388C18.3169 20.3938 17.4799 21.1878 16.1089 21.2128C13.4999 21.2598 10.8879 21.2628 8.2799 21.2078C6.9609 21.1808 6.1379 20.3768 5.9909 19.0458C5.6739 16.1838 5.1339 9.4668 5.1339 9.4668'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.7082 6.23828H3.7502'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.4406 6.239C16.6556 6.239 15.9796 5.684 15.8256 4.915L15.5826 3.699C15.4326 3.138 14.9246 2.75 14.3456 2.75H10.1126C9.53359 2.75 9.02559 3.138 8.87559 3.699L8.63259 4.915C8.47859 5.684 7.80259 6.239 7.01759 6.239'
        stroke={color}
        stroke-width='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

DeleteSVG.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

DeleteSVG.defaultProps = {
  color: 'black',
  className: 'w-[20px] h-[20px] ',
};

export default DeleteSVG;
