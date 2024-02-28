import React from 'react';
import PropTypes from 'prop-types';

const ColorTag = ({
  value,
  label,
  width,
  height,
  color,
  customColor,
  ...props
}) => {
  const getColor = () => {
    if (customColor) {
      color = '';
      return customColor;
    } else {
      switch (color) {
        case 'green':
          return 'rgb(167, 243, 208)';
        case 'orange':
          return 'rgb(254, 215, 170)';
        case 'gray':
          return 'rgb(212, 212, 212)';
        case 'red':
          return 'rgb(252, 165, 165)';
        case 'blue':
          return 'rgb(186, 230, 253)';
        default:
          return 'rgb(167, 243, 208)';
      }
    }
  };
  return (
    <div
      className={`rounded-full flex items-center justify-center`}
      style={{
        width: width,
        height: height,
        backgroundColor: getColor(),
      }}
      value={value}
      {...props}
    >
      <label>{label}</label>
    </div>
  );
};

ColorTag.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  customColor: PropTypes.string,
  color: PropTypes.oneOf(['green', 'orange', 'gray', 'red', 'blue']),
};

ColorTag.defaultProps = {
  value: '',
  label: '',
  height: '40px',
  width: '150px',
};

export default ColorTag;
